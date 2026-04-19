function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value;

  if (task === "") return;

  let li = document.createElement("li");
  li.textContent = task;

  li.onclick = function () {
    li.style.textDecoration = "line-through";
  };

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

// Timer
let time = 1500; // 25 minutes
let timerRunning = false;
let interval;

function startTimer() {
  if (timerRunning) return;
  timerRunning = true;

  interval = setInterval(() => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    document.getElementById("timer").textContent =
      `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    time--;

    if (time < 0) clearInterval(interval);
  }, 1000);
}

function resetTimer() {
  clearInterval(interval);
  time = 1500;
  timerRunning = false;
  document.getElementById("timer").textContent = "25:00";
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    addTask,
    startTimer,
    resetTimer,
  };
}
/**
 * Form validation and submission handling
 * Validates user input before processing
 */
function validateForm(formData) {
  if (!formData.name || formData.name.trim() === '') {
    console.error('Name field is required');
    return false;
  }
  if (!formData.email || !isValidEmail(formData.email)) {
    console.error('Valid email is required');
    return false;
  }
  return true;
}

/**
 * Email validation utility function
 * @param {string} email - Email address to validate
 * @returns {boolean} - True if email is valid
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Clear form inputs and reset validation states
 * @param {HTMLFormElement} form - Form to reset
 */
function clearForm(form) {
  form.reset();
  const inputs = form.querySelectorAll('input, textarea, select');
  inputs.forEach(input => {
    input.classList.remove('error');
  });
}
