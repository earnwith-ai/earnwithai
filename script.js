// Countdown Timer
const launchDate = new Date("January 1, 2025 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = launchDate - now;

  if (timeLeft <= 0) {
    document.getElementById("days").innerText = "00";
    document.getElementById("hours").innerText = "00";
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = String(days).padStart(2, "0");
  document.getElementById("hours").innerText = String(hours).padStart(2, "0");
  document.getElementById("minutes").innerText = String(minutes).padStart(2, "0");
  document.getElementById("seconds").innerText = String(seconds).padStart(2, "0");
}

setInterval(updateCountdown, 1000);

// Scroll to Section
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

// Popup for Free eBook
document.getElementById("ebook-popup-btn").addEventListener("click", () => {
  document.getElementById("popup").style.display = "flex";
});

document.getElementById("close-popup").addEventListener("click", () => {
  document.getElementById("popup").style.display = "none";
});
