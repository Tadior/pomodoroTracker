'use strict';

const timeWrapper = document.querySelector('.time');
const minutes = timeWrapper.querySelector('.time__minutes');
const seconds = timeWrapper.querySelector('.time__seconds');

const setting = document.querySelector('.setting');
let settingMinutes = setting.querySelector('.setting-minutes');
let shortBreak = setting.querySelector('.setting-short-break');
let longBreak = setting.querySelector('.setting-long-break');

function showTime(time) {
   minutes.innerHTML = time;
   seconds.innerHTML = '00';
   console.log(time)
}
showTime(settingMinutes.value);
