function maximizeProfit(tasks, deadline) {
  tasks.sort((a, b) => b.profit - a.profit);

  let maxProfit = 0;
  const schedule = [];

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];

    if (task.days <= deadline) {
      schedule.push(task);
      maxProfit += task.profit;
      deadline -= task.days;
    }
  }
  return { maxProfit, schedule };
}

const tasks = [
  { days: 3, profit: 100 },
  { days: 1, profit: 50 },
  { days: 2, profit: 60 },
  { days: 2, profit: 40 },
  { days: 1, profit: 30 },
];
const deadline = 4;

const result = maximizeProfit(tasks, deadline);
console.log('Максимальний прибуток:', result.maxProfit);
console.log('Розклад завдань:', result.schedule);
