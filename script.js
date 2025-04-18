const toggleButton = document.getElementById("toggle-btn");
const body = document.body;

toggleButton.addEventListener("click", () => {
    body.classList.toggle("light-theme");
    toggleButton.textContent = body.classList.contains("light-theme") ? "🌙" : "🌞";
});

// Countdown Timer - Simple implementation
const countdown = document.getElementById("countdown");
const launchDate = new Date("2025-05-01T00:00:00").getTime();

setInterval(function() {
    const now = new Date().getTime();
    const distance = launchDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    countdown.innerHTML = `Launch in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    
    if (distance < 0) {
        clearInterval(x);
        countdown.innerHTML = "Launched!";
    }
}, 1000);
