// Exam Dates
const examDates = [
  { id: 1, date: new Date("December 15, 2024 10:00:00").getTime() },
  { id: 2, date: new Date("December 18, 2024 10:00:00").getTime() },
  { id: 3, date: new Date("December 22, 2024 10:00:00").getTime() },
  { id: 4, date: new Date("December 24, 2024 10:00:00").getTime() },
  { id: 5, date: new Date("December 29, 2024 10:00:00").getTime() }
];

function updateTimers() {
  const now = new Date().getTime();

  examDates.forEach(({ id, date }) => {
    const distance = date - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance >= 0) {
      document.getElementById(`days-${id}`).textContent = days.toString().padStart(2, "0");
      document.getElementById(`hours-${id}`).textContent = hours.toString().padStart(2, "0");
      document.getElementById(`minutes-${id}`).textContent = minutes.toString().padStart(2, "0");
      document.getElementById(`seconds-${id}`).textContent = seconds.toString().padStart(2, "0");
    } else {
      document.getElementById(`timer-${id}`).innerHTML = `<h2>Time's Up for This Exam!</h2>`;
    }
  });
}

// Update all timers every second
setInterval(updateTimers, 1000);
updateTimers(); // Initial call
