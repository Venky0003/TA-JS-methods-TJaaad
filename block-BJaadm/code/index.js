let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of sex key from persons array
let peopleName = persons.map((person) => person.name)
console.log(peopleName)
// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = persons.map((person) => person.grade)
console.log(peopleGrade)
// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = persons.map((person) => person.sex)
console.log(peopleSex)
// Log the filtered named of people in peopleName that starts with 'J' or 'P'
let peopleNames = persons.filter((person)=>{
  if(
    person.name[0]==="J"||
    person.name[0]==="P"
  ){
    return true;
  }
  else{
    return false;
  }
})
console.log(peopleNames)
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
 function lengthAC (persons){
  return (persons.filter((person)=>{
  if(
    person.name[0]==="A"||
    person.name[0]==="C"
  ){
    return true;
  }
  else{
    return false;
  }
}).map((n) => n.length))
};
console.log(lengthAC (persons));
// Log all the filtered male ('M') in persons array
let filteredMale = persons.filter((person)=>{
  if(
    person.sex==="M"
  ){
    return true;
  }
  else {
    return false;
  }
})
console.log(filteredMale)
// Log all the filtered female ('F') in persons array
console.log(persons.filter((person)=>{
  if(
    person.sex==="F"
  ){
    return true;
  }
  else {
    return false;
  }
}))
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
console.log(persons.filter((person)=>{
  if(
    person.sex ==="F" && person.name[0]==="C" ||
    person.sex ==="F" && person.name[0]==="J"
  ){
    return true;
  }
  else {
    return false;
  }
}))
// Log all the even numbers from peopleGrade array
console.log(peopleGrade.filter((num) => num % 2===0))
// Find the first name that starts with 'J' in persons array and log the object
let peopleNamesJ = persons.filter((person)=>{
  if(
    person.name[0]==="J"
  ){
    return true;
  }
  else{
    return false;
  }
});
console.log( peopleNamesJ)

// Find the first name that starts with 'P' in persons array and log the object
let peopleNamesP = persons.filter((person)=>{
  if(
    person.name[0]==="P"
  ){
    return true;
  }
  else{
    return false;
  }
});
console.log( peopleNamesP)
// Find the first name that starts with 'J', grade is greater than 10 and is a female
console.log(persons.filter((person)=>{
  if(
    person.sex ==="F" && person.name[0]==="J" && person.grade > 10
  
  ){
    return true;
  }
  else {
    return false;
  }
}))
// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter((person)=>{
  if(
    person.sex ==="F"
  ){
    return true;
  }
  else{
    return false;
  }
})
console.log(femalePersons);
// Filter all the male from persons array and store in malePersons array
let malePersons = persons.filter((person)=>{
  if(
    person.sex ==="M"
  ){
    return true;
  }
})
console.log(malePersons);
// Find the sum of all grades and store in gradeTotal
let gradeTotal = peopleGrade.reduce((acc,cv)=>{
  return acc + cv;
},0)
console.log(gradeTotal);
// Find the average grade
console.log(gradeTotal/peopleGrade.length)
// Find the average grade of male
function avgMaleGrade(malePersons){
  return malePersons.map((person)=>person.grade)
  .reduce((acc,cv) =>{ 
    return acc + cv;
  },0)/malePersons.length
}
console.log(avgMaleGrade(malePersons))
// Find the average grade of female
console.log(avgMaleGrade(femalePersons))
// Find the highest grade
console.log([... peopleGrade].sort((a,b) =>a-b).pop());
// Find the highest grade in male
 console.log([...malePersons].map((g)=>g.grade).sort((a,b)=>a-b).pop())
// Find the highest grade in female
console.log([...femalePersons].map((g)=>g.grade).sort((a,b)=>a-b).pop())
// Find the highest grade for people whose name starts with 'J' or 'P'
let gradeOfjp = persons.filter((person)=>{
  if(
    person.name[0] === "J" ||
    person.name[0] === "P"
  ){
    return true;
  }
  else {
  return false
  }
});
let grademapJP = gradeOfjp.map((g)=>g.grade);
console.log(grademapJP.sort((a,b)=>a-b).pop())
// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
  console.log([...peopleGrade].sort((a,b)=>a-b))
// Sort the peopleGrade in descending order
console.log([...peopleGrade].sort((a,b)=>b-a))
// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
console.log([...peopleGrade].sort((a,b)=>b-a))
// Sort the array peopelName in ascending `ABCD..Za....z`
console.log(peopleName.sort())
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
console.log([...peopleName].sort());