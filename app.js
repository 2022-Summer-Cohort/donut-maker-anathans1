import Donuts from "./Donuts.js";

// const container = (document.querySelector('.container').innerText =
//   'mmmmmmmmm doughnuts.... ahhhhhhh!');

const countEl = document.querySelector("#count");
const autoclickEl = document.querySelector("#autoclick");
const multiplierEl = document.querySelector("#multiplier");
const autoclickCostEl = document.querySelector("#autoclickCost");
const multiplierCostEl = document.querySelector("#multiplierCost");
// const getStatusEl = document.querySelector("#status")

const donut = new Donuts(220, 0, 0);

countEl.innerText = donut._count;
autoclickEl.innerText = donut._autoclick;
multiplierEl.innerText = donut._multiplier;
autoclickCostEl.innerText = donut._autoclickCost;
multiplierCostEl.innerText = donut._multiplierCost;


const countBtn = document.querySelector("#countBtn");
countBtn.addEventListener("click", () => {
  donut.click();
  countEl.innerText = Math.round(donut._count);
})


const autoclickBtn = document.querySelector("#autoclickBtn");
autoclickBtn.addEventListener("click", () => {
  if (donut._count >= donut._autoclickCost) {
    donut._count -= donut._autoclickCost;
    donut._autoclickCost *= 1.1;
    donut._autoclick++;
    setInterval(() => {
      donut.click();
      countEl.innerText = Math.round(donut._count);
      autoclickEl.innerText = Math.round(donut._autoclick)
      autoclickCostEl.innerText = Math.round(donut._autoclickCost);
    }, 1000)
  }
  else {
    alert("You cannot afford an autoclicker yet!")
  }
})

const multiplierBtn = document.querySelector("#multiplierBtn")
multiplierBtn.addEventListener("click", () => {

  donut.multiplierClick();
  multiplierEl.innerText = Math.round(donut._multiplier)
  multiplierCostEl.innerText = Math.round(donut._multiplierCost);
  countEl.innerText = Math.round(donut._count)
})



