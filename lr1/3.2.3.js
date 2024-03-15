const bills = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1000];
const S = 1013;

const minCountOfBills = (arr, S) => {
  let result = [];
  let i = arr.length - 1;

  while (S > 0 && i >= 0) {
    while (S >= arr[i]) {
      S -= arr[i];
      result.push(arr[i]);
    }
    i--;
  }

  return result;
};

const payment = minCountOfBills(bills, S);
console.log('Кіькість купюр:', payment.length);
console.log('Купюри для виплати:', payment);
