Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
    -Parameter:separator
    -Return:new string with separators
    -Example:
    ```js
     let user = ["hello","world","tell"];
     user.join();//'hello,world,tell'
     let userOne = [1,2,3,4,5,6];
     userOne.join();//'1,2,3,4,5,6'
     let userTwo = ["A quick brown fox jumped"];
     userTwo.join();//'A quick brown fox jumped'
    ```
    -`join`it joins all elements in array to string
    - no it does not mutate the original array
3. `flat`
    -Parameter:depth level of structure to flat 
    -Return: a new array of concatenated
    -Example:
    ```js
    let userOne = [1,2,[3,[4,5,6]]];
     userOne.flat();//[1, 2, 3, Array(3)]
    let userTwo = [1,2,[5,6,[7,8,[9,10]]]];
    userTwo.flat(4); //[1, 2, 5, 6, 7, 8, 9, 10]
    let userThree = [1,2,[3,4,[5,6]]]
    userThree.flat(1)// [1, 2, 3, 4, Array(2)]
    ```
    `flat`it will make the nested arrays to combine based on depth we provide or dfault to 0
    no it does not mutate the original array
4. `push`
    -Parameter: element
    -Return: array with new element
    -Example:
    ```js
    let user = ["red","black","white"];
    user.push("yellow");//4
     let userOne = [1,2,3,4,5];
    userOne.push(6);//6
      let userTwo = ["red","black","white"];
    userTwo.push("teal","yellow");//5
    ```
5. `indexOf`
    -Parameter:search element 
    -Return:index of element or -1
    -Example:
    ```js
    let user =  ["red","black","white","blue","yellow"];
    user.indexOf("white");//2
    let userOne =[1,2,3,4,5,6.7,8,9];
    userOne.indexOf(10) // -1
    ```
    `indexOf`it gives the index number element you entered if present in the array else -1
    -No it does not change original array
6. `lastIndexOf`
    -Parameter:serach element
    -Return: index of element
    -Example:
    ```js
    let user =  ["red","black","white","blue","yellow","red"];
    user.lastIndexOf("red");//5
    let userOne =[1,2,2,3,4,5,6.7,8,9];
    userOne.lastIndexOf(2) // 2
    ```
    `lastIndexOf`it will check from last index number gives you result
    -No it does not change original array
7. `includes`
    -Parameter:value of search element
    -Return:boolean true/false
    -Example:
    ```js
     let user =  ["red","black","white","blue","yellow","red"];
    user.includes("red");//true
    let userOne =[1,2,2,3,4,5,6.7,8,9];
    userOne.includes(10) // false
    ```
    `includes`it will search for element and returns true or false 
    -No it does not change original array
8. `reverse`
    -Return: reverse of array
    -Example:
    ```js
    let user =  ["red","black","white","blue","yellow","red"];
    user.reverse();//  ['red', 'yellow', 'blue', 'white', 'black', 'red']
    let userOne =[1,2,2,3,4,5,6.7,8,9];
    userOne.reverse()//[9, 8, 6.7, 5, 4, 3, 2, 2, 1]
    ```
    `reverse`it will reverse the array
    it changes the original array 
9. `every`
    -Parameter: callback function
    -Return:true or false
    -Example:
    ```js
   function isBelowTen  (currentValue){
    return currentValue<10;
   }
    let userOne =[1,2,2,3,4,5,6.7,8,9];
    console.log(userOne.every(isBelowTen));// true

    let  isAboveZero = (val) => val > 0
    userTwo = [25,58,88,98,1,2,32,0];
    console.log(userTwo.every(isAboveZero));// false 
    ```
    `every`will give true or false based on whole array
    No it does not change the original array
10. `shift`
    -Return:removes first element from array
    -Example:
    ```js
     let user =  ["red","black","white","blue","yellow","red"];
     user.shift();// "red"
     let userOne = [1,2,3,4,5,6,7,8,9,8];
     userOne.shift();//1
    ```
    -`shift`removes the first element of the array
    -It cahnges the original array
11. `splice`
    -Parameter:index
    -Return:it will return the array of removed elements
    -Example:
    ```js
     let user =  ["red","black","white","blue","yellow","red"];
     user.splice();//['blue', 'yellow', 'red']
     let userOne =  ["red","black","white","blue","yellow","red"];
     userOne.splice(1,0,"blue");//['red', 'blue', 'black', 'white', 'blue', 'yellow', 'red']; 
    ```
    `splice`it will give bew array of removed items
    -It changes the original array
12. `find`
    -Parameter:callback function 
    -Return:first element which satisfies the condition
    -Example:
    ```js
    let isAbove = (val) =>val>0;
    let user = [10,20,50,55,6,78,89,80];
    console.log(user.find(isAbove));//10

    let isGreater = (value) => value > 100;
    let userOne = [0,2,5,6,8,100,150];
    console.log(userOne.find(isGreater));//150
    ```
    `find` wiil give the first element of array which satisfies the condition
    -No it dors not change original array
13. `unshift`
    -Parameter:element to add at start of array
    -Return:new array length of element added
    -Example:
    ```js
     let user =  ["red","black","white","blue","yellow","red"];
     user.unshift("teal");//7
     let userOne = [1,2,3,4,5,6,7,8,9,10];
     userOne.unshift(11);//11
    ```
    `unshift`adds element to array at first index
    -It does change the original array
14. `findIndex`
    -Parameter:callback function
    -Return:the index first satisfies the condition
    -Example:
    ```js
    let above = (val)=>val>5;
     let userOne = [1,2,3,4,5,6,7,8,9,10];
     console.log(userOne.findIndex(above));//5
      let isAbove = (val)=>val>200;
     let user = [10,2,30,40,500,60,70,80,90,1000];
     console.log(user.findIndex(isAbove));//4
    ```
    `findIndex`it will give the index of which element is true
    -No it does not change the original array
15. `filter`
    -Parameter:callback function ,element index,array
    -Return:filtered array of given condition
    -Example:
    ```js
    let isAboveLength = (val) => val.length > 4
    let colors = ["red","black","white","blue","yellow"];
      console.log(colors.filter(isAboveLength ));//['black', 'white', 'yellow']
      let isAboveLength = (val) => val.length < 4
    let  colors= ["red","black","white","blue","yellow"];
      console.log(colors.filter(isAboveLength ));//["red"]
    let isAdult =(age) => age>18;
    let ages = [18, 20, 14, 15, 8, 99, 102]   
    console.log(ages.filter(isAdult));// [20, 99, 102]
      ```
      `filter`it will filter the elements of given condition
      -No it does not change the original array

16. `flat`
    -Parameter:
    -Return:
    -,Example:
    ,```j,,,,s
    ```
17. `forEach`
    -Parameter:callback function, element, index, array
    -Return: value of each element
    -Example:
    ```js

    let colors = ["red","black","white","blue","yellow"];
   colors.forEach(el => console.log(el))//
   //red
   //black
    //white
    //blue
    //yellow
    ```
    `forEach `it iterates over every element
18. `map`
    -Parameter:callback function,index,element,array
    -Return:new array of the callback function product
    -Example:
    ```js
    let isNum = (val) => val * 2;
    let num = [1,2,3,4,5,6,7,8,9];
    console.log(num.map(isNum));//[2, 4, 6, 8, 10, 12, 14, 16, 18]
    let isNum = (val) => val+5;
    console.log(num.map(isNum))// [6, 7, 8, 9, 10, 11, 12, 13, 14]
    ```
    `map`maps every element in every time and calls callback function
    -No it does not chage the original array.
19. `pop`
    -Return:removes last element from array
    -Example:
    ```js
    let colors = ["red","black","white","blue","yellow"];
    colors.pop() //'yellow'
    let num =  [1,2,3,4,5,6,7,8,9]
   num.pop() //9
    ```
    `pop`removes the last element from array 
    It does change the original array
20. `reduce`
    -Parameter:cb,accumulatot ,current value,array
    -Return:reducer of new array
    -Example:
    ```js
    function isTotal(acc, crVal) {
        return acc + crVal;
   }
    let num = [1,23,4,5,6,7,8,9];
    console.log(num.reduce(isTotal))//63
     function isless(acc, crVal) {
        return acc - crVal;
      }
       let num = [1,23,4,5,6,7,8,9];
        console.log(num.reduce(isless))//-61
    ```
    `reduce` it runs over total array every element and executes callback function on it every elemnt
    -no it does not change the original array
21. `slice`
    -Parameter:start and end index
    -Return:extracted array of original
    -Example:
    ```js
    let colors =["red","black","white","blue","yellow"]
    colors.slice(2,4);// ['white', 'blue']
    let num = [12,18,25,58,63,25];
    num.slice(3)//[58, 63, 25]
    ```
    `slice`it will give new array of extracted elements of original array.
    -No it does not change the original array
22. `some`
    -Parameter:cb,index,element,array
    -Return:boolean true/false
    -Example:
    ```js
    let isOdd = (odd) => odd % 2 !==0
    let num =[1,2,3,4,5]
    console.log(num.some(isOdd))//true
    ```
    `some`it checks for any one element which satisfies the condition and returns true/false
    -no it does not change the original array
