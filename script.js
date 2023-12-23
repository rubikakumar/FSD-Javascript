//Print odd numbers in an array Anonymous Function

let number=[1,2,3,4,5,6,7,8,9];
(function(arr){
    arr.forEach(num => {
        if(num%2!==0){
           console.log(num);
       }
        
   });
})
(number);

//Print odd numbers in an array IIFE

(function(arr) {
    arr.forEach((num) => {
      if (num % 2 !== 0) {
        console.log(num);
      }
    
    });
  
})
([1, 2, 3, 4, 5,6,7,8,9]);

  
// Convert all the strings to title caps in a string array Anonymous Function

const stringsToTitleCaps = (arr) => {
    return arr.map((str) => str.toLowerCase().replace(/(^|\s)\S/g, (match) => match.toUpperCase()));
  };
  const stringArray = ["hello world", "have a great day", "good day"];
  const titleCapsArray = stringsToTitleCaps(stringArray);
  console.log(titleCapsArray);
  
// Convert all the strings to title caps in a string array IIFE

const variable = ["welcome to javascript"];
const Array = ((arr) => {
    return arr.map((str) => str.toLowerCase().replace(/(^|\s)\S/g, (match) => match.toUpperCase()));
  })(variable);
  
  console.log(Array);

  //Sum of all numbers in an array Anonymous Function

  const sumOfNumbers = function(arr) {
    return arr.reduce(function(acc, num) {
      return acc + num;
    }, 0);
  };
  
  const numbersArray = [1, 2, 3, 4, 5];
  const sum = sumOfNumbers(numbersArray);
  console.log("The sum of numbers:", sum);

 //Sum of all numbers in an array IIFE
 

 const total = [1, 2, 3, 4, 5];

const sumtotal = (function(arr) {
  return arr.reduce(function(acc, num) {
    return acc + num;
  }, 0);
})(total);

console.log("The sum of numbers:", sumtotal);

//Return all the prime numbers in an array Anonymous Function

const isPrime = function(num) {
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
  
  const getPrimeNumbers = function(arr) {
    return arr.filter(function(num) {
      return isPrime(num);
    });
  };
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const primeNumbers = getPrimeNumbers(numbers);
  console.log("Prime numbers in the array:", primeNumbers);


 //Return all the prime numbers in an array IIFE

 const ArrayofTotal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const primetotal = (function(arr) {
  const isPrime = function(num) {
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

  return arr.filter(function(num) {
    return isPrime(num);
  });
})(ArrayofTotal);

console.log("Prime numbers in the array:", primetotal);
  
//Return all the palindromes in an array Anonymous Function

const isPalindrome = function(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  };
  
  const getPalindromes = function(arr) {
    return arr.filter(function(str) {
      return isPalindrome(str);
    });
  };
  
  const wordsArray = ["level", "array", "nitin", "srting", "madam"];
  const palindromeWords = getPalindromes(wordsArray);
  console.log("Palindromes in the array:", palindromeWords);

  //Return all the palindromes in an array IIFE

  const wordsReversed = ["level", "array", "nitin", "srting", "madam"];

const palindrome = (function(arr) {
  const isPalindrome = function(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  };

  return arr.filter(function(str) {
    return isPalindrome(str);
  });
})(wordsReversed);

console.log("Palindromes in the array:", palindrome);

//Return median of two sorted arrays of the same size anonymous function

const SortedArrays = function(nums1, nums2) {
    const mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
    const length = mergedArray.length;
    
    if (length % 2 === 0) {
      const mid = length / 2;
      return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    } else {
      return mergedArray[Math.floor(length / 2)];
    }
  };
  
  const arr1 = [1, 3, 5];
  const arr2 = [2, 4, 6];
  const median = SortedArrays(arr1, arr2);
  console.log("Median of two sorted arrays:", median);

//Return median of two sorted arrays of the same size IIFE

const arr3 = [1, 3, 5];
  const arr4 = [2, 4, 6];
  
  const medianofarray = (function(nums1, nums2) {
    const mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
    const length = mergedArray.length;
    
    if (length % 2 === 0) {
      const mid = length / 2;
      return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    } else {
      return mergedArray[Math.floor(length / 2)];
    }
  })(arr3, arr4);
  
  console.log("Median of two sorted arrays:", medianofarray);


//Remove duplicates from an array anonymous function 

const removeDuplicates = function(arr) {
    return arr.filter(function(item, index) {
      return arr.indexOf(item) === index;
    });
  };
  
  const arrayWithDuplicates = [1, 2, 2, 5, 3, 4, 4, 6, 5, 6,];
  const arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);
  console.log("Array without duplicates:", arrayWithoutDuplicates);

  //Remove duplicates from an array IIFE

  const arrayDuplicates = [1, 2, 2, 3, 4, 5, 5, 6, 6];

const arrayWithoutonDuplicates = (function(arr) {
  return arr.filter(function(item, index) {
    return arr.indexOf(item) === index;
  });
})(arrayDuplicates);

console.log("Array without duplicates:", arrayWithoutonDuplicates);

//Rotate an array by k times anonymous function

const rotateArray = function(arr, k) {
    const rotations = k % arr.length;
    return arr.slice(rotations).concat(arr.slice(0, rotations));
  };
  
  const originalArray = [1, 2, 3, 4, 5];
  const rotations = 3;
  const rotatedArray = rotateArray(originalArray, rotations);
  console.log(`Array rotated by ${rotations} times:`, rotatedArray);

  //Rotate an array by k times IIFE

  const rotationArray = [1, 2, 3, 4, 5];
const rotationValue = 3;

const rotated = (function(arr, k) {
  const rotatedArray = function(arr, k) {
    const rotationValue = k % arr.length;
    return arr.slice(rotationValue).concat(arr.slice(0, rotationValue));
  };
  
  return rotatedArray(arr, k);
})(rotationArray, rotationValue);

console.log(`Array rotated by ${rotations} times:`, rotated);

