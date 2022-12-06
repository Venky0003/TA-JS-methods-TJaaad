// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
console.log(numbers.indexOf(101));
// - Find the last index of `9` in numbers
console.log(numbers.lastIndexOf(9));
// - Convert value of strings array into a sentance like "This is a collection of words"
console.log(strings.join(" "))
// - Add two new words in the strings array "called" and "sentance"
strings.push("called","sentance")
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(strings.join(" "))
// - Remove the first word in the array (strings)
console.log(strings.shift())
// - Find all the words that contain 'is' use string method 'includes'
let word = "is"
console.log(`${strings.includes(word)}`);
// - Find all the words that contain 'is' use string method 'indexOf'

// - Check if all the numbers in numbers array are divisible by three use array method (every)
numbers.every((num) => console.log(num % 3 === 0));
// -  Sort Array from smallest to largest
function sorting(a,b){
  return a-b;
}
arr = [...numbers];
console.log(arr);
console.log(arr.sort(sorting));
// - Remove the last word in strings
console.log(strings.pop())
// - Find largest number in numbers

// - Find longest string in strings

// - Find all the even numbers
function isEven(num){
  return  num % 2 === 0;
}
console.log(numbers.filter(isEven));
// - Find all the odd numbers
function isOdd(num){
  return  num % 2 !== 0;
}
console.log(numbers.filter(isOdd));
// - Place a new word at the start of the array use (unshift)
console.log(strings.unshift("Hello"));
// - Make a subset of numbers array [18,9,7,11]
console.log(numbers.splice(3,4));
// - Make a subset of strings array ['a','collection']
console.log(strings.splice(2,2));
// - Replace 12 & 18 with 1221 and 1881
// numbers.replace(12,1221);
// numbers.replace(18,1881);
// - Replace words in strings array with the length of the word

// - Find the sum of the length of words using above question

// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
// if(customers.firstname ==="J"){
//   console.log(firstname)
// }
// - Create new array with only first name
// let arrStr = [];
// arrStr.push(customers.forEach(customer => console.log((customer.firstname))));
//console.log(arrStr);
// - Create new array with all the full names (ex: "Joe Blogs")

//customers.forEach(customerFull => console.log(customerFull.firstname,lastname));
// - Sort the array created above alphabetically

// - Create a new array that contains only user who has at least one vowel in the firstname.
