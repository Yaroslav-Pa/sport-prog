const a = 2;
const n = 10;

const exponentiation = (num, n) => {
  if (n === 0) return 1;
  if (n === 1) return num;

  let result = 1;
  let base = num;

  while (n > 0) {
    if (n % 2 === 1) {
      result *= base;
    }
    base *= base;
    n = Math.floor(n / 2);
  }

  return result;
};

const result = exponentiation(a, n);
console.log(`${a} в ступені ${n} = ${result}`);
