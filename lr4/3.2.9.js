function maxNonOverlappingActivities(activities) {
  activities.sort((a, b) => a[1] - b[1]);

  const selectedActivities = [];
  let lastEndTime = -1;

  for (const activity of activities) {
      const [startTime, endTime] = activity;
      if (startTime >= lastEndTime) {
          selectedActivities.push(activity);
          lastEndTime = endTime;
      }
  }

  return selectedActivities;
}

const activities = [
  [1, 2],
  [3, 4],
  [0, 6],
  [5, 7],
  [8, 9],
  [5, 9]
];

const result = maxNonOverlappingActivities(activities);
console.log("Обрані дії:", result);
