const QUOTABLE_API_URL = 'https://api.quotable.io/random';

async function fetchInspirationalQuote() {
  try {
    const response = await fetch(QUOTABLE_API_URL);
    if (!response.ok) {
      throw new Error('Quote API request failed');
    }

    const data = await response.json();
    const quoteElement = document.getElementById('quoteText');
    const authorElement = document.getElementById('quoteAuthor');

    if (quoteElement) {
      quoteElement.textContent = data.content;
    }
    if (authorElement) {
      authorElement.textContent = `— ${data.author}`;
    }
  } catch (error) {
    console.error('Unable to fetch quote:', error);
  }
}

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

/**
 * Format time in MM:SS format
 * @param {number} seconds - Total seconds to format
 * @returns {string} - Formatted time string
 */
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

/**
 * Save task to localStorage
 * @param {string} taskText - Task description to save
 */
function saveTask(taskText) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push({ text: taskText, completed: false, timestamp: Date.now() });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

/**
 * Load tasks from localStorage
 * @returns {array} - Array of saved tasks
 */
function loadTasks() {
  return JSON.parse(localStorage.getItem('tasks')) || [];
}

/**
 * Clear all saved tasks from localStorage
 */
function clearAllTasks() {
  localStorage.removeItem('tasks');
}

document.addEventListener('DOMContentLoaded', () => {
  fetchInspirationalQuote();
});
