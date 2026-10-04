function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
console.log(sum(10, 20)); // Output: 30

/*
function sum(numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}
*/
