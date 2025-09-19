// 代码生成时间: 2025-09-19 09:03:07
class ScheduledTaskScheduler {
  constructor() {
    this.timers = []; // 存储定时器
  }

  /**
   * 添加一个新的定时任务
   * @param {Function} task - 要执行的任务函数
   * @param {number} interval - 任务执行的间隔时间，单位毫秒
   */
  addTask(task, interval) {
    const timer = setInterval(task, interval);
    this.timers.push(timer);
  }

  /**
   * 移除指定的定时任务
   * @param {Function} task - 要移除的任务函数
   */
  removeTask(task) {
    this.timers.forEach(timer => {
      if (timer._interval === task) {
        clearInterval(timer);
      }
    });
  }

  /**
   * 清除所有定时任务
   */
  clearAllTasks() {
    this.timers.forEach(timer => clearInterval(timer));
    this.timers = [];
  }

  /**
   * 执行一个立即执行的任务
   * @param {Function} task - 要立即执行的任务函数
   */
  executeImmediately(task) {
    task();
  }
}

// 示例用法
const scheduler = new ScheduledTaskScheduler();

// 添加一个定时任务，每2秒执行一次
scheduler.addTask(() => {
  console.log('Task executed every 2 seconds');
}, 2000);

// 添加一个立即执行的任务
scheduler.executeImmediately(() => {
  console.log('Task executed immediately');
});

// 移除任务（需要知道任务函数的引用）
// scheduler.removeTask(任务函数引用);

// 清除所有任务
// scheduler.clearAllTasks();