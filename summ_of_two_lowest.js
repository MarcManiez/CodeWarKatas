function sumTwoSmallestNumbers(numbers) {  
  numbers.sort(function compareNumbers(a, b) {return a - b;});
  return numbers[0] + numbers[1];
};
