//Print odd numbers in an array using arrow functions

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const printOddNumbers = (arr) => {
  arr.forEach((num) => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};

printOddNumbers(numbersArray);

//Convert all the strings to title caps in a string array using arrow functions

const stringArray = ["hello world", "programming is awesome", "allow string values"];

const convertToTitleCaps = (arr) => {
  return arr.map((str) => {
    return str.toLowerCase().replace(/(^|\s)\S/g, (match) => {
      return match.toUpperCase();
    });
  });
};

const titleCapsArray = convertToTitleCaps(stringArray);
console.log(titleCapsArray);

//Sum of all numbers in an array arrow functions

const Array = [1, 2, 3, 4, 5];

const sumOfNumbers = (arr) => {
  return arr.reduce((acc, num) => acc + num, 0);
};

const sum = sumOfNumbers(Array);
console.log("The sum of numbers:", sum);

//Return all the prime numbers in an array arrow functions

const PrimeValue = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getPrimeNumbers = (arr) => {
  return arr.filter((num) => isPrime(num));
};

const primeNumbers = getPrimeNumbers(PrimeValue);
console.log("Prime numbers in the array:", primeNumbers);

//Return all the palindromes in an array arrow functions

const wordsArray = ["level", "value", "nitin", "arrow", "madam"];

const isPalindrome = (str) => {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
};

const getPalindromes = (arr) => {
  return arr.filter((str) => isPalindrome(str));
};

const palindromeWords = getPalindromes(wordsArray);
console.log("Palindromes in the array:", palindromeWords);