// timeUtils.js
import moment from 'moment';

export function getTimeInfo() {
  return {
    currentTime: moment().format('LTS'), // 10:23:18 PM
    currentDay: moment().format('dddd'), // Monday
    currentDate: moment().format('LL'), // November 20, 2023
  };
}
