function sum(a, b) {
  return a + b;
}

function greetWithSum(text, a, b, sum) {
  const result = sum(a, b);
  console.log(text, result);
}

greetWithSum("Sum", 34, 35, sum);
