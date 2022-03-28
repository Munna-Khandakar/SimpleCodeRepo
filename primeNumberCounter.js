const checkPrime = (num) => {
  let n = num;

  if (n == 0 || n == 1) return false;

  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }

  return true;
};

const counter = (lastDigit) => {
  let count = 0;

  for (let i = 0; i < lastDigit; i++) {
    if (checkPrime(i)) {
      count++;
    }
  }

  console.log(`total prime number from 1 to ${lastDigit} is ${count}`);
};

counter(10000);
