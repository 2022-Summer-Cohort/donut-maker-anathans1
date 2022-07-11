import Donuts from "./Donuts.js";

// const container = (document.querySelector('.container').innerText =
//   'mmmmmmmmm doughnuts.... ahhhhhhh!');

const countEl = document.querySelector("#count");
const autoclickEl = document.querySelector("#autoclick");
const multiplierEl = document.querySelector("#multiplier");
const autoclickCostEl = document.querySelector("#autoclickCost");
const multiplierCostEl = document.querySelector("#multiplierCost");
const clickValueEl =document.querySelector("#clickValue");
const donutEl = document.querySelector("#donut");
// const getStatusEl = document.querySelector("#status")

const donut = new Donuts(220, 0, 0);

countEl.innerText = donut._count;
autoclickEl.innerText = donut._autoclick;
multiplierEl.innerText = donut._multiplier;
autoclickCostEl.innerText = donut._autoclickCost;
multiplierCostEl.innerText = donut._multiplierCost;
clickValueEl.innerText = donut._clickValue;

const modal = document.querySelector(".modal")

const companyBtn = document.querySelector(".sub-btn");
companyBtn.addEventListener("click", () => {
modal.classList.add("active")
})

const closeBtn = document.querySelector(".close-modal");
closeBtn.addEventListener("click", () => {
  modal.classList.remove("active")
})


// $('#donut').click(function() {
//   $(this).toggleClass('rotate');
// });

// function rotate(element, rotation = 300) {
//   element.style.transform = 'rotate(' + rotation + 'deg)';
// }

// document.querySelector('#donut').addEventListener('click', function() {
//   rotate:(this, 300);
// })


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
  countEl.innerText = Math.round(donut._count);
  clickValueEl.innerText = Math.round(donut._clickValue)/100;
})

// const donutimg = document.querySelector("#donutimg");
// donutimg.addEventListener("click", ( {
//   setInterval(() => {
    
//   })
// }))

