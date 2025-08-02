// 代码生成时间: 2025-08-02 13:27:21
 * This program creates a simple task scheduler that can be used to run tasks at specific intervals.
 * It is designed to be clear, maintainable, and extensible.
 *
 * @author Your Name
 * @date Today's Date
 */

// Import the THREE library
const THREE = require('three');

/**
 * Task Scheduler Class
 * @class TaskScheduler
 */
class TaskScheduler {
  constructor() {
    this.tasks = []; // Array to store tasks
  }

  /**
   * Add a task to the scheduler
   * @param {string} id Unique identifier for the task
   * @param {Function} callback Function to be executed
   * @param {number} interval Interval in milliseconds
   */
  addTask(id, callback, interval) {
    if (typeof callback !== 'function') {
      throw new Error('Callback must be a function');
    }

    if (!Number.isInteger(interval) || interval <= 0) {
      throw new Error('Interval must be a positive integer');
    }

    const task = { id, callback, interval, lastRun: Date.now() };
    this.tasks.push(task);
    this.runTask(task);
  }

  /**
   * Run a single task
   * @param {Object} task Task object
   */
  runTask(task) {
    const now = Date.now();
    if (now - task.lastRun >= task.interval) {
      task.callback();
      task.lastRun = now;
    }
  }

  /**
   * Start the scheduler
   */
  start() {
    this.tasks.forEach(task => {
      setInterval(() => this.runTask(task), task.interval);
    });
  }

  /**
   * Remove a task from the scheduler
   * @param {string} id Unique identifier for the task to remove
   */
  removeTask(id) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}

// Example usage of the TaskScheduler
try {
  const scheduler = new TaskScheduler();

  // Example task that updates a label in a THREEJS scene
  const updateLabel = () => {
    console.log('Label updated at', new Date().toLocaleTimeString());
    // Here you would update a label in your Three.js scene
  };

  // Add the task with an interval of 1000ms (1 second)
  scheduler.addTask('updateLabel', updateLabel, 1000);

  // Start the scheduler
  scheduler.start();
} catch (error) {
  console.error('An error occurred:', error.message);
}
