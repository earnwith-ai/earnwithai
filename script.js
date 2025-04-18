// Countdown Timer
const timer = document.getElementById("timer");

// Set the goal date (365 days from launch)
const launchDate = new Date("April 1, 2025"); // You can change this
const targetDate = new Date(launchDate.getTime() + 365 * 24 * 60 * 60 * 1000);

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    timer.innerHTML = "We hit $1M! 🎉";
    return;
  }// Countdown Timer to next year
const targetDate = new Date("2026-01-01T00:00:00").getTime();

function updateTimer() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / 1000 / 60) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("timer").innerHTML = 
    `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateTimer, 1000);

// Toggle Dark/Light Theme
function toggleTheme() {
  const body = document.body;
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
  } else {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
  }
}

// Popup Controls
function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}


  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Popup Logic
function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
