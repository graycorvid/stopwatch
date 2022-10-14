(function () {
  const stoper = document.querySelector("p.numbers");
  const warning = document.querySelector("p.warning");
  const btnStart = document.querySelector("button.start");
  const btnReset = document.querySelector("button.reset");
  const btnSave = document.querySelector("button.save");
  const btnClear = document.querySelector("button.clear");
  let start;
  let scores = [];
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

  const savesLimit = () => {
    if (scores.length === 10) {
      setTimeout(() => {
        warning.classList.add("visible");
      }, 10);
      setTimeout(() => {
        warning.classList.remove("visible");
      }, 3500);
      return;
    } else {
      saveTime();
    }
  };

  const saveTime = () => {
    const time = document.createElement("li");
    time.style.listStyle = "none";
    time.textContent = stoper.textContent;
    scores.push(time);
    document.querySelector("ul").appendChild(time);
  };

  const clearScores = () => {
    document.querySelector("ul").innerHTML = "";
    scores = [];
  };

  btnStart.addEventListener("click", initiateTimer);
  btnReset.addEventListener("click", resetTimer);
  btnSave.addEventListener("click", savesLimit);
  btnClear.addEventListener("click", clearScores);
})();

//RWD - dla wszystkich urządzeń (tylko nokia portrait sprawdzona). Może hover dla desktop wersji, jeśli będzie wyglądać lepiej - jak nie to zostaw tak jak jest teraz.

/* jak ci się będzie chciało bawić to moesz zrobic media queries w mixins? ???? */
