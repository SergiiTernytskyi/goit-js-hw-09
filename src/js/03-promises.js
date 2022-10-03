import { Notify } from "notiflix/build/notiflix-notify-aio";
const notiflixOptions = {
  width: "360px",
  position: "right-top",
  clickToClose: true,
  fontSize: "16px",
  timeout: 5000,
};

let firstDelay = 0;
let stepNumber = 0;
let amountNumber = 0;

const formRef = document.querySelector(".form");
formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { delay, step, amount },
  } = event.currentTarget;

  firstDelay = Number.parseInt(delay.value);
  stepNumber = Number.parseInt(step.value);
  amountNumber = Number.parseInt(amount.value);

  if (firstDelay < 0 || stepNumber < 0 || amountNumber < 0) {
    Notify.warning("Enter values, that are not negative", notiflixOptions);
  } else {
    for (let i = 0; i < amountNumber; i += 1) {
      const calculatedDelay = firstDelay + i * stepNumber;
      const promisePosition = i + 1;

      createPromise(promisePosition, calculatedDelay)
        .then(onSucsess)
        .catch(onError);
    }
  }
  // event.currentTarget.reset();
  // delay.value = 0;
  // step.value = 0;
  // amount.value = 0;
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      setTimeout(() => {
        resolve({ position, delay });
      }, delay);
    } else {
      setTimeout(() => {
        reject({ position, delay });
      }, delay);
    }
  });
}

function onSucsess({ position, delay }) {
  console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  Notify.success(
    `Fulfilled promise ${position} in ${delay}ms`,
    notiflixOptions
  );
}

function onError({ position, delay }) {
  console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  Notify.failure(`Rejected promise ${position} in ${delay}ms`, notiflixOptions);
}
