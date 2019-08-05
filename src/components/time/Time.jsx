import React from 'react';
import styles from './Time.module.css';
import { formatDuration } from './../../shared/Time.service';

export const Time = ({ timeStart, timeEnd, compressed = false }) => (
  <div className={[styles.time, compressed ? styles.compressed : null].join(" ")}>
    {formatDuration(timeStart, timeEnd)}
  </div>
);


