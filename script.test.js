/**
 * @jest-environment jsdom
 */

const { addTask, startTimer, resetTimer } = require('./script');

describe('Braintrack script', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <input id="taskInput" type="text" value="Read chapter 1">
      <ul id="taskList"></ul>
      <div id="timer">25:00</div>
    `;
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test('addTask should append a new task and clear the input', () => {
    const taskInput = document.getElementById('taskInput');
    taskInput.value = 'Read chapter 1';

    addTask();

    const taskList = document.getElementById('taskList');
    expect(taskList.children).toHaveLength(1);
    expect(taskList.children[0].textContent).toBe('Read chapter 1');
    expect(taskInput.value).toBe('');
  });

  test('startTimer should update the timer display after two seconds', () => {
    startTimer();
    jest.advanceTimersByTime(2000);

    const timer = document.getElementById('timer');
    expect(timer.textContent).toBe('24:59');
  });

  test('resetTimer should reset the timer display to 25:00', () => {
    const timer = document.getElementById('timer');
    timer.textContent = '18:42';

    resetTimer();

    expect(timer.textContent).toBe('25:00');
  });
});