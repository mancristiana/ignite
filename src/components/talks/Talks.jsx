import React from 'react';
import styles from './Talks.module.css';
import { Talk } from './../talk/Talk';
import { compare } from './../../shared/Time.service';

export const Talks = ({ data }) => (
  <div className={styles.talks}>
    {data
      .sort((talk1, talk2) => compare(talk1.timeStart, talk2.timeStart))
      .map((talk, index) =>
        <div className={styles.talk} key={index} style={{width: (talk.room === "Room 4 + 5 + 6") ? "100%" : null}}>
          <Talk
            name={talk.name}
            description={talk.descriptionHtml}
            speaker={talk.contributors}
            categories={talk.categories}
            timeStart={talk.timeStart}
            timeEnd={talk.timeEnd}
            room={talk.room}
          />
        </div>
      )}
  </div>
);
