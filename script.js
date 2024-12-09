// Countdown Timer Logic
const countdown = () => {
  const targetDate = new Date("2024-12-15T10:00:00").getTime(); // Set your target date and time here
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference <= 0) {
    document.querySelector('.timer').innerHTML = "<h2>Time's up!</h2>";
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = days.toString().padStart(2, '0');
  document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
  document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
};

// Update every second
setInterval(countdown, 1000);
countdown(); // Initialize immediately
