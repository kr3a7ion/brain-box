console.log("Brain Box is runing!");

// ====== 1. FIND THINGS ON THE PAGE ====== //
const scoreDisplay = document.querySelector("#score");
const feedback = document.querySelector("#feedback");

const optionA = document.querySelector("#option-a");
const optionB = document.querySelector("#option-b");
const optionC = document.querySelector("#option-c");
const optionD = document.querySelector("#option-d");

console.log(optionA);

// ====== 2. REMEMBER VALUES =========//
let score = 0;

// ====== 3. REACT - Listen for a click on each option ====== //
optionA.addEventListener("click", function () {
  score = score + 1;
  scoreDisplay.textContent = score;
});
