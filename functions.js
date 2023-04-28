// Write a function that takes two numbers as arguments and returns their sum.

// function sum2nums(num1, num2) {
//   return num1 + num2;
// }

// sum2nums(5, 10);

// Write a function that takes a string as an argument and returns the length of the string.

// function strLength(str1) {
//   return str1.length;
// }

// strLength("banana");

// Write a function that takes an array of numbers as an argument and returns the largest number in the array.

// let arr = [1, 2, 3, 4, 5];
// let largest = 0;

// function arrLargest(arr) {
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }
//   return largest;
// }

// arrLargest(arr);

// Write a function that takes an array of strings as an argument and returns a new array with all the strings capitalized.

// let arr = ["a","b","c","d","e"]
// let arrCap = [];

// function strCap(arr){
//     for (i = 0; i < arr.length; i++){
//         arrCap[i] = arr[i].toUpperCase();
//     }
//     return arrCap;
// }

// strCap(arr);

// Write a function that takes a number as an argument and returns true if the number is even, and false if it is odd.

// function isEvenOdd(number){
//     if (number % 2 === 0){
//         return true;
//     } else
//     return false;
// }

// isEvenOdd(6);

// Write a function that takes two arrays as arguments and returns a new array that contains all the elements from both arrays, in the order they appear.

// let arr1 = [1,2,3,4,5]
// let arr2 = [6,7,8,9,10]
// let arr3 = [];

// function mergeArray(arr1, arr2){
//     arr3 = arr1.concat(arr2);
//     return arr3;
// }   

// mergeArray(arr1, arr2);

// Write a function that takes a string as an argument and returns a new string with all the vowels removed.

let str = "banana";

function removeVowels(str) {
  return str.replace(/[aeiou]/gi, "");
}

removeVowels(str);

// Write a function that takes an array of numbers as an argument and returns a new array with all the numbers doubled.

// Write a function that takes an array of strings as an argument and returns a new array with all the strings sorted in alphabetical order.

// Write a function that takes a number as an argument and returns the factorial of that number (i.e., the product of all the numbers from 1 to that number).
