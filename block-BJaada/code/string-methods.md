Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
   -Return: new string of upper case.
   -Example:
   ```js
   let name = "arya"
   name.toUpperCase();// "ARYA"
   let sentence ="A quick brown fox jumped over a lazy dog"
   sentence.toUpperCase();//'A QUICK BROWN FOX JUMPED OVER A LAZY DOG'
   let str = "hello world!"
   str.toUpperCase();//'HELLO WORLD!'
   ```
   `toUpperCase` converts the string to upper case of letters
3. `toLowerCase`
    -Return: new calling string value to lower case.
    -Example:
    ```js
     let name = "Arya";
     name.toLowerCase(); //'arya'
     let sentence ="A Quick Brown Fox Jumped Over A Lazy DOG"
     sentence.toLowerCase();//'a quick brown fox jumped over a lazy dog'
     let str = "HELLO WORLD!"
     str.toLowerCase();//'hello world!'
    ```
4. `trim`
    -Return: removes white space around the string.
    -Example:
    ```js
    let greeting = " hello world  "
    greeting.trim();//"hello world"
    let sentence ="           A quick brown fox jumped over a lazy dog     ";
    sentence.trim();//'A quick brown fox jumped over a lazy dog'
    let str = "string    ";
    str.trim();// 'string'
    ```
    `trim`removes the white space around the string and returns string 
5. `trimEnd`
    -Return: removes the white space at the end of a string
    -Example:
    ```js
    let test = "hello   ";
    test.trimEnd();
    let sentence = "A quick brown fox jumped over a lazy dog                 ";
    sentence.trimEnd();
    let greet = "hello world        ";
    greet.trimEnd();
    ```
    `trimEnd`the white space at the end of string is been removed.
6. `trimStart`
     -Return: removes the white space at the start of a string
    -Example:
    ```js
    let test = "hello   ";
    test.trimStart();
    let sentence = "A quick brown fox jumped over a lazy dog                 ";
    sentence.trimStart();
    let greet = "hello world        ";
    greet.trimStart();
    ```
    `trimStart`the white space at the start of a string is been removed.
7. `concat`
    -Parameters:one 0r more strings to concatinate
    -Return: a new string of combining two or more strings provided.
    -Example:
    ```js
   let str ="alt";
   let str1 = "Campus";
   str.concat(str1)//'altCampus'

   let greet ="Good Morning";
   let user = "Venkat";
   greet.concat(" ",user);//'Good Morning Venkat'
    ```
    `concat` combines two or more strings and concatinates it to single string
8. `endsWith`
    -Parameters:word or character to search for and the end position optional
    -Return: true / false 
    -Example: 
    ```js
    let sentence = "A quick brown fox jumped over a lazy dog"
    sentence.endsWith("dog"); //true
    sentence.endsWith("dog",40);//true
    let str = "hello world";
    str.endsWith("d")//true
    ``` 
    `endsWith`this will tell you whether the string is ending with specified word or character
9. `includes`
    -parameter: search of string and position default to 0
    -Return: true/false
     -Example: 
    ```js
    let sentence = "A quick brown fox jumped over a lazy dog"
    sentence.includes("fox")//true
    ```
    `includes`will tell you whether it included the specified string in the string or not 
10. `indexOf`
    -Parameters:search character of string
    -Return:gives the index of first string character or -1
    -Example:
    ```js
    let str = "hello world"
    str.indexOf(" ");//5
    let str2 = "A quick brown fox jumped over a lazy dog";
    str2.indexOf("brown");//8
   str2.indexOf("a");//30
    ```
    `indexOf`it gives the index of the string or the character
11. `lastIndexOf`
    -Parameters:search character of string
    -Return:the indexof last character in string
    -Example:
    ```js
    let str = "hello world"
    str.lastIndexOf(" ");//5
    let str2 = "A quick brown fox jumped over a lazy dog";
    str2.lastIndexOf("brown");//8
   str2.lastIndexOf("a");//38
    ```
    `lastIndexOf`it will give you the last index of the string of a character
12. `padEnd`
     -Parameters:target length to pad a string
     -Retrurn:padding at end of the string is applied as the target length
     -Example:
     ```js
     let str = "hello"
     str.padEnd(10,"*");//'hello*****'
     let str1 = "welcome"
     str1.padEnd(12,"_");//'welcome_____'
     ```
     `padEnd`applying pad to string of specified length
13. `padStart`
     -Parameters:target length to pad a string
     -Retrurn:padding at start of the string is applied as the target length
     -Example:
     ```js
     let str = "hello"
     str.padStar(10,"*");//'*****hello'
     let str1 = "welcome"
     str1.padStar(12,"_");//'_____welcome'
     ```
     `padStart`applying the pad at the start of a string of target length
14. `repeat`
     -Parameters:number for the repetition
     -Retrurn:repetition of string
     -Example:
     ```js
     let str = "Hello";
     str.repeat(5) //'HelloHelloHelloHelloHello'
     ```
15. `replace`
     -Parameters: the word and replacing word 
     -Retrurn: replaced string
     -Example:
     ```js
     let str = "hell"
     str.replace("l","a")//"heal"
     let str1= "hello welcome";
     str1.replace("welcome","world!")//'hello world!'
     ```
     `replace`it will replace the specified character or word of the string which occurs first
16. `slice`
     -Parameters:the start of an index and end of an index is optional
     -Retrurn: a new string of extracted
     -Example:
     ```js
     let str = "hello";
     str.slice(3);//"lo"
     let str1 = "A joy of learning"
     str1.slice(9);//'learning'
     let strTwo = "A quick brown fox jumped over a lazy dog";
     strTwo.slice(19,40);//"jumped over a lazy dog"
     ```
     `slice`it will give you the new substring of a string with the given index  words
17. `split`
     -Parameters:separator and limit 
     -Retrurn:an array of strings with separatot
     -Example:
     ```js
     let str =  "hello";
     str.split("l",1);//['he']
     let strOne = "A way of learning";
     strOne.split(" ") //['A', 'way', 'of', 'learning']
     let strTwo = "hello world";
     strTwo.split();//['hello world']
     ```
     `split`converts the string into an array of strings 
18. `substring`
     -Parameters:index start and index end
     -Retrurn:specifid part of string
     -Example:
     ```js
     let str =  "hello";
     str.substring(1);//'ello'
     let strOne = "A way of learning";
     strOne.substring(5) //' of learning'
     let strTwo = "hello world"; //
     strTwo.substring(4,8);'o wo'
     ```
     `substring` extracts substring from string with start index and end index is optional