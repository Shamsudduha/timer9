// Array of exam dates and subjects
const exams = [
  {
    date: new Date("December 18, 2024 10:00:00"),
    name: "Anatomy with Histology (Paper II)",
  },
  {
    date: new Date("December 22, 2024 10:00:00"),
    name: "Physiology (Paper I)",
  },
  {
    date: new Date("December 24, 2024 10:00:00"),
    name: "Physiology (Paper II)",
  },
  {
    date: new Date("December 29, 2024 10:00:00"),
    name: "Biochemistry (Paper I)",
  },
  {
    date: new Date("December 31, 2024 10:00:00"),
    name: "Biochemistry (Paper II)",
  },
];

// Function to get the next upcoming exam
function getNextExam() {
  const now = new Date();
  // Find the first exam whose date is in the future
  return exams.findIndex((exam) => exam.date > now);
}

// Get the index of the next upcoming exam
let currentIndex = getNextExam();
if (currentIndex === -1) {
  // No upcoming exams, use the last exam as a fallback
  currentIndex = exams.length - 1;
}

// Initialize target date and exam
let currentExam = exams[currentIndex];
let targetDate = currentExam.date;

// Function to update the "next exam" text
function updateNextExamText() {
  const formattedDate = `${currentExam.date
    .getDate()
    .toString()
    .padStart(2, "0")}.${(currentExam.date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}.${currentExam.date.getFullYear()}`;
  document.getElementById("next-exam").textContent = `Next Exam: ${currentExam.name} on ${formattedDate}`;
}

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

  // If the countdown is over, switch to the next exam
  if (distance < 0) {
    currentIndex += 1;
    if (currentIndex < exams.length) {
      // Move to the next exam
      currentExam = exams[currentIndex];
      targetDate = currentExam.date;
      updateNextExamText(); // Update the "next exam" text
    } else {
      // No more exams, clear the timer and update text
      clearInterval(timerInterval);
      document.getElementById("next-exam").textContent = "All exams are over!";
      document.getElementById("days").textContent = "00";
      document.getElementById("hours").textContent = "00";
      document.getElementById("minutes").textContent = "00";
      document.getElementById("seconds").textContent = "00";
    }
  }
}

// Update the next exam text immediately
updateNextExamText();

// Update the timer every second
const timerInterval = setInterval(updateTimer, 1000);
updateTimer(); // Initial call to display immediately
