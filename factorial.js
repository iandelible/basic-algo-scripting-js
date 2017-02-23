function factorialize(num) {
  var factorialTotal = 1;
  for (i = 1; i <= num; i++) {
    factorialTotal *= i;
  }
  return factorialTotal;
}

factorialize(5);
