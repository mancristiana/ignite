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

  useEffect(() => {
    const parsedData = Papa.parse(csvData, {
      header: true
    });
    setData(parsedData.data);


  });
  return (
    <div className={styles.app}>
      <div className={styles.liveTalk}>
        <Header>Templafy Ignite</Header>
        <Talks data={data} />
      </div>
      <div className={styles.agenda}>
        <Header size={30}>{formatDay(getNow())}</Header>
        <Agenda data={data} today={getNow()} />
      </div>

    </div>
  );
};

export default App;
