const M = [1, 2, 4, 8, 10, 20, 30, 40, 50];

const smallestUnobtainable = (arr) => {
  let target = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= target) {
      target += arr[i];
    } else {
      break;
    }
  }
  return target;
};

const result = smallestUnobtainable(M);
console.log('Не можливо отримати:', result);
