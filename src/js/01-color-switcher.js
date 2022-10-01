const refs = {
  body: document.querySelector("body"),
  startBtn: document.querySelector("[data-start]"),
  stopBtn: document.querySelector("[data-stop]"),
};

console.log(refs.startBtn);
console.log(refs.stopBtn);

let intervalId = null;
refs.stopBtn.disabled = true;

refs.startBtn.addEventListener("click", () => {
  refs.body.style.backgroundColor = getRandomHexColor();

  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;

  intervalId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

refs.stopBtn.addEventListener("click", () => {
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;

  clearInterval(intervalId);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
