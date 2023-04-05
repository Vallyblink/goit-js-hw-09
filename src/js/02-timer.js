import { Notify } from 'notiflix/build/notiflix-notify-aio';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const timer = {
    buttonStart: document.querySelector('[data-start'),
    input: document.querySelector('[datetime-picker]'),
    days:document.querySelector('[data-days]'),
    hours:document.querySelector('[data-hours]'),
    minutes:document.querySelector('[data-minutes]'),
    seconds:document.querySelector('[data-seconds]')
}

let currentData = new Date().getTime();
let timerData;

timer.buttonStart.addEventListener('click', onTimerStart)

function onTimerStart(){
  
 timerInterval = setInterval (()=>{
    const currentTime = new Date().getTime();
    let timerValue = timerData - currentTime;
    const { days, hours, minutes, seconds } = convertMs(timerValue);
            timer.days.textContent = addLeadingZero(`${days}`);
            timer.hours.textContent = addLeadingZero(`${hours}`);
            timer.minutes.textContent = addLeadingZero(`${minutes}`);
            timer.seconds.textContent = addLeadingZero(`${seconds}`);
   onTimverFinish(timerValue, timerInterval)
  }, 1000)}

 function onTimverFinish(ms, interval){
  if (ms<= 1000){
    clearInterval( interval)
    timer.buttonStart.disable = false;
    window.alert("Get ready, it`s time to start!")
  }
 }


flatpickr("#datetime-picker", {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
  timerData = selectedDates[0];  
  if(timerData <= currentData){
    Notify.warning("Please choose a date in the future");
    timer.buttonStart.disable = true;
    return
  } 
  }
});

function addLeadingZero(value) {
  return String(value).padStart(2, '0')
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return ({ days, hours, minutes, seconds });
}