function minimalPayment(M, S) {
  let result = [];
  let i = M.length - 1;

  while (S > 0 && i >= 0) {
      while (S >= M[i]) {
          S -= M[i];
          result.push(M[i]);
      }
      i--;
  }

  return result;
}

// Приклад використання
const M = [1, 2, 5, 10, 20, 50, 100, 200]; // Купюри доступних номіналів
const S = 123; // Сума, яку треба виплатити

const payment = minimalPayment(M, S);
console.log("Мінімальна кількість купюр:", payment.length);
console.log("Купюри для виплати:", payment);
