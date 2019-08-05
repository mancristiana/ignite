import Papa from 'papaparse';
import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import Header from './components/header/Header';
import {Talks} from './components/talks/Talks';
import { csvData } from "./data.js";


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
      <Header>Templafy Ignite</Header>  
      <Talks data={data} /> 
    </div>
  );
};

export default App;
