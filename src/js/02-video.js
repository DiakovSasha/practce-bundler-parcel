import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const STORAGE_KEY = 'videoplayer-current-time';
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function (event) {
    console.log(event);
    localStorage.setItem(STORAGE_KEY, event.seconds);
  }, 1000)
);

const currentTime = parseInt(localStorage.getItem(STORAGE_KEY));
console.log(currentTime);
if (currentTime) {
  player.setCurrentTime(currentTime);
}
