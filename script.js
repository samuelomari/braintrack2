// ================= TASKS =================
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function addTask() {
  const text = document.getElementById('taskInput').value;
  const date = document.getElementById('taskDate').value;

  if (!text || !date) return;

  tasks.push({ text, date, completed: false });
  localStorage.setItem('tasks', JSON.stringify(tasks));

  document.getElementById('taskInput').value = "";
  renderTasks();
}

function renderTasks() {
  const list = document.getElementById('taskList');
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement('li');

    li.innerHTML = `
      <span style="${task.completed ? 'text-decoration: line-through;' : ''}">
        ${task.text} - ${task.date}
      </span>
      <button onclick="toggleTask(${index})">Toggle Task</button>
      <button onclick="deleteTask(${index})">Delete Task</button>
    `;

    list.appendChild(li);
  });
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks();
}


// ================= GOALS =================
let goals = JSON.parse(localStorage.getItem('goals')) || [];

function addGoal() {
  const text = document.getElementById('goalInput').value;
  if (!text) return;

  goals.push({ text, completed: false });
  localStorage.setItem('goals', JSON.stringify(goals));

  document.getElementById('goalInput').value = "";
  renderGoals();
}

function renderGoals() {
  const list = document.getElementById('goalList');
  list.innerHTML = "";

  goals.forEach((goal, index) => {
    const li = document.createElement('li');

    li.innerHTML = `
      <span style="${goal.completed ? 'text-decoration: line-through;' : ''}">
        ${goal.text}
      </span>
      <button onclick="toggleGoal(${index})">Toggle Goal</button>
      <button onclick="deleteGoal(${index})">Delete Goal</button>
    `;

    list.appendChild(li);
  });
}

function toggleGoal(index) {
  goals[index].completed = !goals[index].completed;
  localStorage.setItem('goals', JSON.stringify(goals));
  renderGoals();
}

function deleteGoal(index) {
  goals.splice(index, 1);
  localStorage.setItem('goals', JSON.stringify(goals));
  renderGoals();
}


// ================= TIMER =================
let time = 0;
let interval = null;
let isRunning = false;

function setCustomTime() {
  const minutes = parseInt(document.getElementById("customMinutes").value);
  if (!minutes) return;

  time = minutes * 60;
  updateDisplay();
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;

  interval = setInterval(() => {
    if (time <= 0) {
      clearInterval(interval);
      isRunning = false;
      return;
    }

    time--;
    updateDisplay();
  }, 1000);
}

function pauseTimer() {
  clearInterval(interval);
  isRunning = false;
}
function resumeTimer() {
  if (isRunning) return;
  startTimer();
}

function resetTimer() {
  clearInterval(interval);
  isRunning = false;
  time = 0;
  updateDisplay();
}

function updateDisplay() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  document.getElementById("timer").textContent =
    `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}


// ================= STUDY TRACKER =================
let studySessions = JSON.parse(localStorage.getItem('studySessions')) || [];

function logStudySession() {
  const hours = parseFloat(document.getElementById('hours').value);
  const focus = parseFloat(document.getElementById('focus').value);

  if (!hours || !focus) return;

  studySessions.push({
    hours,
    focus,
    date: new Date().toISOString()
  });

  localStorage.setItem('studySessions', JSON.stringify(studySessions));
  generateInsights();
}

function generateInsights() {
  if (studySessions.length === 0) return;

  const totalHours = studySessions.reduce((sum, s) => sum + s.hours, 0);
  const avgFocus = studySessions.reduce((sum, s) => sum + s.focus, 0) / studySessions.length;

  let message = `Total Hours: ${totalHours} | Avg Focus: ${avgFocus.toFixed(1)}% `;

  if (avgFocus < 50) {
    message += "- Improve focus";
  } else if (avgFocus < 75) {
    message += "- Good, but improve consistency";
  } else {
    message += "- Excellent focus";
  }

  document.getElementById('insights').textContent = message;
}


// ================= LOAD =================
document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  renderGoals();
  generateInsights();
});