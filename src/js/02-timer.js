import { Notify } from "notiflix/build/notiflix-notify-aio";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const timerStartBtnRef = document.querySelector("[data-start]");
const refs = {
  days: document.querySelector("[data-days]"),
  hours: document.querySelector("[data-hours]"),
  minutes: document.querySelector("[data-minutes]"),
  seconds: document.querySelector("[data-seconds]"),
};

timerStartBtnRef.disabled = true;

let date = null;

class Timer {
  constructor({ onTick }) {
    this.onTick = onTick;
    this.intervalID = null;
    this.isActive = false;
    this.refs = {};
    this.notiflixOptions = {
      width: "360px",
      position: "center-center",
      clickToClose: true,
      fontSize: "16px",
      timeout: 4000,
    };
  }
  start() {
    if (this.isActive) {
      return;
    }

    const selectedDate = date.getTime();
    this.isActive = true;

    this.intervalID = setInterval(() => {
      const startDate = Date.now();
      const delta = selectedDate - startDate;
      const calculatedDate = this.convertMs(delta);

      this.onTick(calculatedDate);

      if (delta <= 1000) {
        clearInterval(this.intervalID);
        Notify.success("The time has come!", this.notiflixOptions);
      }
    }, 1000);
  }

  convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = this.addLeadingZero(Math.floor(ms / day));
    const hours = this.addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = this.addLeadingZero(
      Math.floor(((ms % day) % hour) / minute)
    );
    const seconds = this.addLeadingZero(
      Math.floor((((ms % day) % hour) % minute) / second)
    );

    return { days, hours, minutes, seconds };
  }

  addLeadingZero(value) {
    return String(value).padStart(2, 0);
  }

  onDateSelect(date) {
    const delta = date.getTime() - Date.now();

    if (delta <= 0) {
      Notify.failure(
        "Selected date is incorrect. Please choose date in the future!",
        this.notiflixOptions
      );
      return;
    }

    Notify.success(
      "Selected date is correct. Selected date is in the future!",
      this.notiflixOptions
    );
    timerStartBtnRef.disabled = false;
    return date;
  }
}

flatpickr("#datetime-picker", {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    date = timer.onDateSelect(selectedDates[0]);
  },
});

function updateInterface({ days, hours, minutes, seconds }) {
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.minutes.textContent = minutes;
  refs.seconds.textContent = seconds;
}

const timer = new Timer({
  onTick: updateInterface,
});

timerStartBtnRef.addEventListener("click", () => {
  timer.start();
});
