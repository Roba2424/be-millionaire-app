export const generateFibonacciPrizes = (numQuestions, basePrize = 1000) => {
  const prizes = [basePrize];
  let a = prizes[0];
  let b = basePrize;

  for (let i = 0; i < numQuestions - 1; i++) {
    const next = a + b;
    prizes.push(next);
    a = b;
    b = next;
  }

  return prizes;
};
