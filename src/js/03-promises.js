import { Notify } from "notiflix/build/notiflix-notify-aio";

const formRef = document.querySelector(".form");

let firstDelay = null;
let stepNumber = null;
let amountNumber = null;

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { delay, step, amount },
  } = event.currentTarget;

  firstDelay = delay.value;
  stepNumber = step.value;
  amountNumber = amount.value;

  // createPromise(amountNumber, firstDelay)
  //   .then(({ position, delay }) => {
  //     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  //   })
  //   .catch(({ position, delay }) => {
  //     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  //   });
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  const calculatedDelay =
    Number.parseInt(firstDelay) + Number.parseInt(stepNumber);

  console.log(calculatedDelay);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve();
      } else {
        reject();
      }
    }, delay);
  });
}
