// Timer Logic
let totalSeconds = 10000 * 60 * 60; // 10,000 hours in seconds
let intervalId = null;
let isRunning = false;

// DOM Elements
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");

// Load saved time from localStorage
if (localStorage.getItem("remainingTime")) {
  totalSeconds = parseInt(localStorage.getItem("remainingTime"), 10);
  updateDisplay();
}

// Start Timer
startButton.addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true;
    intervalId = setInterval(countdown, 1000);
  }
});

// Pause Timer
pauseButton.addEventListener("click", () => {
  isRunning = false;
  clearInterval(intervalId);
});

// Reset Timer
resetButton.addEventListener("click", () => {
  isRunning = false;
  clearInterval(intervalId);
  totalSeconds = 10000 * 60 * 60;
  updateDisplay();
  localStorage.setItem("remainingTime", totalSeconds);
});

// Countdown Function
function countdown() {
  if (totalSeconds > 0) {
    totalSeconds--;
    updateDisplay();
    localStorage.setItem("remainingTime", totalSeconds);
  } else {
    clearInterval(intervalId);
    alert("You reached 10,000 hours! 🎉");
  }
}

// Update Display
function updateDisplay() {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  hoursElement.textContent = hours.toString().padStart(2, "0");
  minutesElement.textContent = minutes.toString().padStart(2, "0");
  secondsElement.textContent = seconds.toString().padStart(2, "0");
}
