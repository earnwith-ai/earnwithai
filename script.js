// Countdown Timer for 365 days from Jan 1, 2025
const timer = document.getElementById("timer");
const endDate = new Date("2025-12-31T23:59:59").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = endDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / 1000 / 60) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

// Popup CTA
const popup = document.getElementById("popup");
const openPopup = document.getElementById("openPopup");
const closePopup = document.getElementById("closePopup");

openPopup.addEventListener("click", () => popup.style.display = "block");
closePopup.addEventListener("click", () => popup.style.display = "none");

window.onclick = (e) => {
  if (e.target === popup) popup.style.display = "none";
};
