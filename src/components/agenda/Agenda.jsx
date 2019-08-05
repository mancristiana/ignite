import React from 'react';
import styles from './Agenda.module.css';
import { AgendaItem } from './../agendaItem/AgendaItem';
import { Time } from './../time/Time';
import { compare, isTimeOnGivenDay } from './../../shared/Time.service';

export const Agenda = ({ data, today }) => (
  <div>
    {data
      .sort((talk1, talk2) => compare(talk1.timeStart, talk2.timeStart))
      .filter(item => isTimeOnGivenDay(item.timeStart, today))
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
          <Time timeStart={group.timeStart} timeEnd={group.timeEnd} compressed={true} />
          <AgendaItems data={group.data} />
        </div>
      ))};
</div>


);


const AgendaItems = ({ data }) => (<div className={styles.talks}>
  {data
    .map((talk, index) =>
      <div className={styles.talk} key={index}>
        <AgendaItem
          name={talk.name}
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
