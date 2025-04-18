// Countdown Timer for 365 days from Jan 1, 2025
const timer = document.getElementById("timer");
const endDate = new Date("2025-12-31T23:59:59").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = endDate - now;

  if (distance < 0) {
    timer.innerHTML = "🔥 We're live!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

// Popup Modal Functionality
const popup = document.getElementById("popup");
const openPopupButton = document.getElementById("openPopup");
const closePopupButton = document.getElementById("closePopup");

// Open Popup
openPopupButton.addEventListener("click", () => {
  popup.style.display = "block";
});

// Close Popup
closePopupButton.addEventListener("click", () => {
  popup.style.display = "none";
});

// Close Popup when clicking outside the modal
window.onclick = (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
};

// Email Validation for Popup Form
function validateEmail() {
  const emailInput = document.getElementById("email-input");
  const email = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Thank you! Your eBook will be sent shortly.");
  popup.style.display = "none";
}

// Theme Toggle (Dark/Light Mode)
const themeToggle = document.getElementById("theme-toggle");
let isDarkMode = true; // Default to dark mode

themeToggle.addEventListener("click", () => {
  if (isDarkMode) {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    themeToggle.textContent = "Switch to Dark Mode";
  } else {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "Switch to Light Mode";
  }
  isDarkMode = !isDarkMode;
});
