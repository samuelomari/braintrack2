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