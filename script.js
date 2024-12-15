// Array of exam dates and subjects
const exams = [
  {
    date: new Date("December 18, 2024 10:00:00"),
    name: "Anatomy with Histology",
    next: "Physiology on 22nd Dec",
  },
  {
    date: new Date("December 22, 2024 10:00:00"),
    name: "Physiology",
    next: "Physiology on 24th Dec",
  },
  {
    date: new Date("December 24, 2024 10:00:00"),
    name: "Physiology",
    next: "Biochemistry on 29th Dec",
  },
  {
    date: new Date("December 29, 2024 10:00:00"),
    name: "Biochemistry",
    next: null, // No next exam after Biochemistry
  },
];

// Get current date and find the next exam
let currentExamIndex = exams.findIndex((exam) => exam.date > new Date());
if (currentExamIndex === -1) {
  currentExamIndex = exams.length - 1; // If no upcoming exam, show the last one
}

const targetDate = exams[currentExamIndex].date;
const nextExam = exams[currentExamIndex].next;

// Update the "next exam" text
document.getElementById("next-exam").textContent = `Next Exam: ${exams[currentExamIndex].name} on ${targetDate.toLocaleDateString()}`;

// Function to update the countdown timer
function updateTimer() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  // Time calculations for days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the respective elements
  document.getElementById("days").textContent = days.toString().padStart(2, "0");
  document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");

  // If the countdown is over, show the next exam
  if (distance < 0 && currentExamIndex < exams.length - 1) {
    currentExamIndex++;
    targetDate = exams[currentExamIndex].date;
    document.getElementById("next-exam").textContent = `Next Exam: ${exams[currentExamIndex].name} on ${targetDate.toLocaleDateString()}`;
  }
}

// Update the timer every second
setInterval(updateTimer, 1000);
updateTimer(); // Initial call to display immediately
