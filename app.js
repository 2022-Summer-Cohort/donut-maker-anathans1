import Donuts from "./Donuts.js";

// const container = (document.querySelector('.container').innerText =
//   'mmmmmmmmm doughnuts.... ahhhhhhh!');

const countEl = document.querySelector("#count");
const autoclickEl = document.querySelector("#autoclick");
const multiplierEl = document.querySelector("#multiplier")
// const getStatusEl = document.querySelector("#status")

const donut = new Donuts(1,1,1);

countEl.innerText = donut._count;
autoclickEl.innerText = donut._autoclick;
multiplierEl.innerText = donut._multiplier;

// StatusEl.innerHTML = donut.getStatus();

const countBtn = document.querySelector("#countBtn");
countBtn.addEventListener("click", () => {
  donut.click();
  countEl.innerText = donut._count;
})
