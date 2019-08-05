import React from 'react';
import styles from './Talk.module.css';
import { generateColor } from './../../shared/Color.service';

export const Talk = ({ name, description, speaker, categories, timeStart, timeEnd, room }) => (


  <div className={styles.talk}>
    <div className={styles.location}>
      <Location room={room} />
      <Categories categories={categories} />
    </div>

    <div className={styles.details}>
      <Title name={name} />
      <Speaker name={speaker} />
      <div className={styles.description} dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  </div>
);

const Location = ({ room }) => (
  <div className={styles.room}>{room}</div>
);

const Title = ({ name }) => (
  <h1 className={styles.title}>{name}</h1>
);

const Speaker = ({ name }) => (
  <div className={styles.speaker}>{name.replace("-", " ")}</div>
);

const Categories = ({ categories = [] }) => (
  <div className={styles.categories}>
    {categories.split(", ").map((category, index) =>
      <div key={index}
        className={styles.category}
        style={{ backgroundColor: generateColor(category) }}>{category}</div>)}
  </div>
);


