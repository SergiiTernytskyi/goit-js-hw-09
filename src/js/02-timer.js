import { Notify } from "notiflix/build/notiflix-notify-aio";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
  dateInput: document.querySelector("input"),
  startBtn: document.querySelector("[data-start]"),
  days: document.querySelector("[data-days]"),
  hours: document.querySelector("[data-hours]"),
  minutes: document.querySelector("[data-minutes]"),
  seconds: document.querySelector("[data-seconds]"),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    onDateSelect(selectedDates[0]);
  },
};

const notiflixOptions = {
  width: "360px",
  position: "right-top",
  //   backOverlay: true,
  clickToClose: true,
  fontSize: "16px",
  timeout: 4000,
};

refs.startBtn.disabled = true;

flatpickr("#datetime-picker", options);

function onDateSelect(date) {
  const delta = date.getTime() - Date.now();

  if (delta <= 0) {
    Notify.failure(
      "Selected date is incorrect. Please choose date in the future!",
      notiflixOptions
    );
    return;
  }

  refs.startBtn.disabled = false;
  Notify.success(
    "Date is correct. Selected date is in the future!",
    notiflixOptions
  );
  refs.startBtn.addEventListener("click", () => {
    const intervalId = setInterval(() => {
      const delta = date.getTime() - Date.now();

      const calculatedDate = convertMs(delta);

      refs.days.textContent = calculatedDate.days;
      refs.hours.textContent = calculatedDate.hours;
      refs.minutes.textContent = calculatedDate.minutes;
      refs.seconds.textContent = calculatedDate.seconds;
    }, 1000);
  });
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

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
