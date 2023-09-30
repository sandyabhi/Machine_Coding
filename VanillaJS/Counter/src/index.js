const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");
const resetBtn = document.getElementById("resetBtn");
const counterDisplay = document.getElementById("counterDisplay");

let counter = 0;

function updateCounterDisplay() {
  counterDisplay.innerText = counter;
}

incrementBtn.addEventListener("click", () => {
  counter++;
  updateCounterDisplay();
});

decrementBtn.addEventListener("click", () => {
  counter--;
  updateCounterDisplay();
});

resetBtn.addEventListener("click", () => {
  counter = 0;
  updateCounterDisplay();
});
