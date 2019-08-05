import moment from 'moment';

export function getNow() {
  return moment();
}

export function isTimeOnGivenDay(time, day) {
  return moment(time).isSame(moment(day), 'day');
}

export function isLive(startTime, endTime, now) {
  let startTimeMoment = moment(startTime).subtract(1, "hour");
  let endTimeMoment = moment(endTime).add(15, "minutes");;
  let nowMoment = moment(now);
  
  return nowMoment.isAfter(startTimeMoment) && 
    nowMoment.isBefore(endTimeMoment);
}

export function compare(date1, date2) {
  if (moment(date1).isSame(date2)) {
    return 0;
  } else if (moment(date1).isBefore(date2)) {
    return -1;
  } else {
    return 1;
  }
}

export function formatDuration(dateStart, dateEnd) {
  let timeStart = moment(dateStart).format("H:mm");

  if(dateEnd) {
    let timeEnd = moment(dateEnd).format("H:mm");
    return `${timeStart} - ${timeEnd}`;
  } else {
    return timeStart;
  }
}

export function formatDay(date) {
  return moment(date).format("ddd, Do MMMM");
}
