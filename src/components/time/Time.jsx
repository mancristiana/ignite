import React from 'react';
import styles from './Time.module.css';
import { formatDuration } from './../../shared/Time.service';

export const Time = ({ timeStart, timeEnd }) => (
  <div className={styles.time}>
    {formatDuration(timeStart, timeEnd)}
  </div>
);


