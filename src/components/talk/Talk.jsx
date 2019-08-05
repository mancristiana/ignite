import React from 'react';
import styles from './Talk.module.css';
import { formatDuration } from './../../shared/Time.service';

export const Talk = ({ name, description, speaker, categories, timeStart, timeEnd, room }) => (
  <article className={styles.talk}>
    <Time timeStart={timeStart} timeEnd={timeEnd} />
    <h1>{name}</h1>
    <div dangerouslySetInnerHTML={{ __html: description }} />
    <div className={styles.speaker}>{speaker}</div>
    <div>{room}</div>
    <Categories categories={categories} />
  </article>
);

const Categories = ({ categories = []}) => (
  <div>
    {categories.split(",").map((category, index) => <div key={index}>{category}</div>)}
  </div>
);


const Time = ({ timeStart, timeEnd }) => (
  <div className={styles.time}>
    {formatDuration(timeStart, timeEnd)}
  </div>
);


