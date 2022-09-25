const stoper = document.querySelector("p.numbers");
const btnStart = document.querySelector("button.start");
const btnReset = document.querySelector("button.reset");
let start;
let [mseconds, seconds, minutes, hours] = [0, 0, 0, 0];

const initiateTimer = () => {
  btnStart.classList.toggle("start");

  if (btnStart.className !== "start") {
    startTimer();
  } else {
    stopTimer();
  }
};

const appendZero = () => {
  if (mseconds < 10 && mseconds.toString().length < 2)
    mseconds = "0" + mseconds;
  if (seconds < 10 && seconds.toString().length < 2) seconds = "0" + seconds;
  if (minutes < 10 && minutes.toString().length < 2) minutes = "0" + minutes;
  if (hours < 10 && hours.toString().length < 2) hours = "0" + hours;
};

const buttonChange = () => {
  btnStart.textContent = "stop";
};

const stopTimer = () => {
  btnStart.textContent = "start";
  clearInterval(start);
};

const resetTimer = () => {
  stopTimer();
  [mseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  appendZero();
  displayStoper();
  btnStart.classList.add("start");
};

const displayStoper = () => {
  stoper.textContent = `${hours}:${minutes}:${seconds}:${mseconds}`;
};

const formatTimer = () => {
  mseconds++;
  if (mseconds < 10) {
    mseconds = `0${mseconds}`;
  } else if (mseconds > 99) {
    seconds++;
    mseconds = 0;
    mseconds = `0${mseconds}`;
    if (seconds < 10) {
      seconds = `0${seconds}`;
    } else if (seconds > 59) {
      minutes++;
      seconds = 0;
      seconds = `0${seconds}`;
      if (minutes < 10) {
        minutes = `0${minutes}`;
      } else if (minutes > 59) {
        hours++;
        minutes = 0;
        minutes = `0${minutes}`;
        if (hours < 10) {
          hours = `0${hours}`;
        }
      }
    }
  }
  displayStoper();
};

const startTimer = () => {
  appendZero();
  buttonChange();

  start = setInterval(formatTimer, 10);
};

btnStart.addEventListener("click", initiateTimer);
btnReset.addEventListener("click", resetTimer);

// const btnClear = document.querySelector("button.clear");
// const scores = document.querySelector(".list ul");
