let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
let sorting = [...words].sort((a,b) => a.length-b.length).pop();
console.log(sorting);
// - Convert the above array "words" into an array of length of word instead of word.
console.log(words.map((word)=>word.length));
// - Create a new array that only contains word with atleast one vowel.
console.log(words.filter((word)=>{
  if(
    word.toLowerCase().includes("a")||
    word.toLowerCase().includes("e")||
    word.toLowerCase().includes("i")||
    word.toLowerCase().includes("o")||
    word.toLowerCase().includes("u")
  ){
    return true;
  }
  else {
    return false;
  }
}))
// - Find the index of the word "rhythm"
console.log(words.indexOf("rhythm"));
// - Create a new array that contians words not starting with vowel.
let notVowelStart = (words.filter((word)=>{
  if(
    word[0].toLowerCase().includes("a")||
    word[0].toLowerCase().includes("e")||
    word[0].toLowerCase().includes("i")||
    word[0].toLowerCase().includes("o")||
    word[0].toLowerCase().includes("u")
  ){
    return false;
  }
  else {
    return true;
  }
}))
console.log(notVowelStart);
// - Create a new array that contianse words not ending with vowel
let notVowelEnd = (words.filter((word)=>{
  if(
    word[word.length-1].toLowerCase().includes("a")||
    word[word.length-1].toLowerCase().includes("e")||
    word[word.length-1].toLowerCase().includes("i")||
    word[word.length-1].toLowerCase().includes("o")||
    word[word.length-1].toLowerCase().includes("u")
  ){
    return false;
  }
  else {
    return true;
  }
}))
console.log(notVowelEnd);
let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
let sumArray =numbers.reduce((acc,cv) =>{
  return acc + cv;
},0)
console.log(sumArray);

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
console.log(numbers.filter((num)=>num % 3 === 0))
// - Create a new array that contains only even numbers
console.log(numbers.filter((num)=>num % 2 === 0))
// - Create  a new array that contains only odd numbers.
console.log(numbers.filter((num)=>num % 2 !== 0))
// - Create a new array that should have true for even number and false for odd numbers.
console.log(numbers.filter((num)=>{
  if(num % 2 === 0){
    return true;
  }
  else return false;
}));
// - Sort the above number in assending order.
let sortingNum = [...numbers].sort((a,b)=>a-b);
console.log(sortingNum);
// - Does sort mutate the original array?
//yes
// - Find the sum of the numbers in the array.
let sumNum =numbers.reduce((acc,cv) =>{
  return acc + cv;
},0)
console.log(sumNum);
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
let sumNumAvg = sumNum/10
console.log(sumNumAvg);
let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
let stringSum = strings.map((word)=>word.length);
let totalSum =stringSum.reduce((acc,cv)=>{
  return acc+cv;
},0);
let averageWordLength =totalSum /10;
console.log(averageWordLength);