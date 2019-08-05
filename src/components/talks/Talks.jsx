import React from 'react';
import styles from './Talks.module.css';
import { Talk } from './../talk/Talk';
import { Time } from './../time/Time';
import { compare } from './../../shared/Time.service';

export const Talks = ({ data }) => (
  <div>
    {data
      .sort((talk1, talk2) => compare(talk1.timeStart, talk2.timeStart))
      .reduce((talksGroupedByTime, talk, index, array) => {

        let group = talksGroupedByTime.find(g => g.timeStart === talk.timeStart);
        if (group) {
          group.data.push(talk);
        } else {
          talksGroupedByTime.push({
            timeStart: talk.timeStart,
            timeEnd: talk.timeEnd,
            data: [talk]
          });
        }

        return talksGroupedByTime;
      }, [])
      .map((group, index) => (
        <div className={styles.activeTalks} key={index}>
          <Time timeStart={group.timeStart} timeEnd={group.timeEnd} />
          <ActiveTalks data={group.data} />
        </div>
      ))};
</div>


);


const ActiveTalks = ({ data }) => (<div className={styles.talks}>
  {data
    .map((talk, index) =>
      <div className={styles.talk} key={index} style={{ width: (talk.room === "Room 4 + 5 + 6") ? "100%" : null }}>
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
