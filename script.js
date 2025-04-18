</script>
const toggleButton = document.getElementById("toggle-btn");
const body = document.body;

toggleButton.addEventListener("click", () => {
    body.classList.toggle("light-theme");
    toggleButton.textContent = body.classList.contains("light-theme") ? "🌙" : "🌞";
}); 

  // Countdown Timer
  const launchDate = new Date("2025-06-01T00:00:00").getTime();
  const countdownEl = document.getElementById("countdown");

  setInterval(() => {
    const now = new Date().getTime();
    const diff = launchDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    countdownEl.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
</script>
