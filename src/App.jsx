import Papa from 'papaparse';
import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import Header from './components/header/Header';
import { Talks } from './components/talks/Talks';
import { Agenda } from './components/agenda/Agenda';
import { csvData } from "./data.js";
import { formatDay, getNow } from "./shared/Time.service";

const App = () => {
  const [data, setData] = useState([]);
  const [now, setNow] = useState("");

  useEffect(() => {
    const parsedData = Papa.parse(csvData, {
      header: true
    });
    setData(parsedData.data);
    setNow(getNow());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(getNow());
    }, 36000);

    return () => clearInterval(interval);
  });

  return (
    <div className={styles.app}>
      <div className={styles.liveTalk}>
        <Header>Templafy Ignite</Header>
        <Talks data={data} now={now}/>
      </div>
      <div className={styles.agenda}>
        <Header size={30}>{formatDay(now)}</Header>
        <Agenda data={data} today={now} />
      </div>

    </div>
  );
};

export default App;
