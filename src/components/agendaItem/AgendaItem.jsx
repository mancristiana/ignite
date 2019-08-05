import React from 'react';
import styles from './AgendaItem.module.css';

export const AgendaItem = ({ name, speaker, categories, room }) => (
  <div className={styles.agendaItem}>
    <Title name={name} />
    <div className={styles.agendaDetails}>
      <Speaker name={speaker} />
      <Location room={room} />
      {/* <Categories categories={categories} /> */}
    </div>
  </div>
);

const Title = ({ name }) => (
  <h1 className={styles.title}>{name}</h1>
);

const Speaker = ({ name }) => (
  <div className={styles.speaker}>{name.replace("-", " ")}</div>
);

const Location = ({ room }) => (
  <div className={styles.room}>{room}</div>
);

