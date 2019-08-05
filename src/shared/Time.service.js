import moment from 'moment';

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
  let timeEnd = moment(dateEnd).format("H:mm");
  // let date = moment(dateStart).format("MMMM D, YYYY");
  return `${timeStart} - ${timeEnd}`;
}
