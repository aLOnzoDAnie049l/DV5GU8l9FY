// 代码生成时间: 2025-08-25 18:26:27
// The TimerScheduler class encapsulates the functionality of scheduling tasks.
class TimerScheduler {
# FIXME: 处理边界情况
    constructor() {
        this.tasks = [];
# 扩展功能模块
    }

    /**
     * Schedule a task to be executed after a specified delay.
     * @param {function} task - The function to be executed.
     * @param {number} delay - The delay in milliseconds before execution.
     */
    schedule(task, delay) {
        const timeoutId = setTimeout(task, delay);
        this.tasks.push({ task, timeoutId });

        // Return the timeoutId for potential reference or cancellation.
        return timeoutId;
    }

    /**
     * Cancel a scheduled task by its timeoutId.
     * @param {number} timeoutId - The ID of the task to cancel.
     */
    cancel(timeoutId) {
        this.tasks = this.tasks.filter(task => task.timeoutId !== timeoutId);
# TODO: 优化性能
        clearTimeout(timeoutId);
    }

    /**
     * Clear all scheduled tasks.
     */
    clearAll() {
        this.tasks.forEach(task => clearTimeout(task.timeoutId));
        this.tasks = [];
    }

    /**
     * Execute all scheduled tasks immediately, disregarding their delays.
     */
    executeAll() {
        this.tasks.forEach(task => {
            clearTimeout(task.timeoutId);
            task.task();
        });
        this.tasks = [];
    }
# 扩展功能模块
}

// Example usage of the TimerScheduler
const scheduler = new TimerScheduler();

// Schedule a task to log a message after 2 seconds
const timeoutId = scheduler.schedule(() => {
    console.log('Task executed after 2 seconds');
}, 2000);

// Cancel the scheduled task before its execution
setTimeout(() => {
    if (scheduler.tasks.length > 0) {
        scheduler.cancel(timeoutId);
        console.log('Task has been canceled');
    }
}, 1500);

// Alternatively, execute all tasks immediately
# NOTE: 重要实现细节
// scheduler.executeAll();

// Clear all tasks if needed
// scheduler.clearAll();