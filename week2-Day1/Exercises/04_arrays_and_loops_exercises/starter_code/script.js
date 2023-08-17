/* 
  Some specific vocabulary used with arrays and loops:

  index - the numbered position of each item in the array, starting at 0
  iterate - to access each item in an array one by one
  bracket notation - the syntax that uses square brackets to access a specific item by its index
*/

// Exercise 1 - length

let theAlphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Write a function called alphabetLength that returns the length of the array
function alphabetLength() {
  return theAlphabet.length;
}

// Print your answer to the console
console.log(alphabetLength(theAlphabet));

// Exercise 2 - push and pop

// Create a planets array that has nine string values in it

let planets = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
  "Pluto",
];

// Remove the last planet from the array (sorry Pluto)
planets.pop();
// Add a new planet to the end of the array
planets.push("Sun");
// Print your new array to the console
console.log(planets);
// Exercise 3 - for loop

let snacks = ["candy", "popcorn", "potato chips", "fruit", "nuts"];

// Create a for loop that prints each snack item to the console along with its index (ex: "3. fruit")
for (let i = 0; i <= snacks.length; i++) {
  console.log(snacks[i]);
}
// Bonus - use string interpolation or a "template string" to print your string to the console (google it)
// Ex: `Notice the backticks instead of quotes. This is string interpolation syntax with a ${variable}`

// Exercise 4 - for loop with conditional

// Create a for loop that iterates over the snack array, but only prints "My favorite snack is (your favorite snack)" to the console
for (let n = 0; n <= snacks.length; n++) {
  if (snacks[n] === "nuts") {
    console.log(`My favorite snack is ${snacks[n]}`);
  }
}
// Exercise 5 - for loop with new dom elements

const pets = [
  "cats",
  "dogs",
  "iguanas",
  "guinea pigs",
  "rabbits",
  "hedge hogs",
  "parakeets",
];

// Create a for loop that creates and adds the pet to a string that says 'My pet shop has ' and then the pets with strings.
// Bonus - add an 'and' before the last pet.
let say = "My pet shop has ";
for (let x = 0; x < pets.length; x++) {
  if (x === pets.length - 1) {
    say = say + "and " + pets[x];
  } else {
    say = say + pets[x] + ",";
  }
}
console.log(say);
/*-----------------------------------------------------------------
Challenge: 06-reverseUpcaseString
Difficulty: Basic
Prompt:
- Write a function called reverseUpcaseString that accepts a single string argument, then returns the string with its characters in reverse orderand converts all characters to uppercase.
Examples:
reverseUpcaseString("SEI Rocks!"); //=> "!SKCOR IES" 
-----------------------------------------------------------------*/
// Your solution for 06-reverseUpcaseString here:
function reverseUpcaseString(a) {
  return a.toUpperCase().split("").reverse().join("");
}
console.log(reverseUpcaseString("SEI Rocks!"));
/*-----------------------------------------------------------------
Challenge: 07-isPalindrome
Difficulty: Intermediate
Prompt:
- Write a function called isPalindrome that accepts a single string argument, then returns true or false depending upon whether or not the string is a palindrome.
- A palindrome is a word or phrase that are the same forward or backward.
- Casing and spaces are not included when considering whether or not a string is a palindrome.
- If the length of the string is 0 or 1, return true.
Examples:
isPalindrome('SEI Rocks'); //=> false
isPalindrome('rotor'); //=> true
isPalindrome('A nut for a jar of tuna'); //=> true
isPalindrome(''); //=> true
-----------------------------------------------------------------*/
// Your solution for 07-isPalindrome here:
function isPalindrome(a) {
  a = a.split(" ").join("").toLowerCase();
  return a === a.split("").reverse().join("");
}
console.log(isPalindrome("SEI Rocks"));
console.log(isPalindrome("rotor"));
console.log(isPalindrome("A nut for a jar of tuna"));
console.log(isPalindrome(""));
/*-----------------------------------------------------------------
Challenge: 08-hammingDistance
Difficulty: Intermediate
Prompt:
In information theory, the hamming distance refers to the count of the differences between two strings of equal length.  It is used in computer science for such things as implementing "fuzzy search"  capability.
- Write a function named hammingDistance that accepts two arguments which are both strings of equal length.
- The function should return the count of the symbols (characters, numbers, etc.) at the same position within each string that are different.
- If the strings are not of the same length, the function should return NaN.
Examples:
hammingDistance('abc', 'abc'); //=> 0
hammingDistance('a1c', 'a2c'); //=> 1
hammingDistance('!!!!', '****'); //=> 4
hammingDistance('abc', 'ab'); //=> NaN
-----------------------------------------------------------------*/
// Your solution for 08-hammingDistance here:
function hammingDistance(a, b) {
  if (a.length !== b.length) {
    return "NaN";
  }
  var count = 0;
  for (var i = 0; i < a.length; i++) {
    if (a[i] != b[i]) {
    } else {
      continue;
    }
    ++count;
  }
  return count;
}
console.log(hammingDistance("abc", "abc"));
console.log(hammingDistance("a1c", "a2c"));
console.log(hammingDistance("!!!!", "****"));
console.log(hammingDistance("abc", "ab"));
/*-----------------------------------------------------------------
Challenge: 09-mumble
Difficulty: Intermediate
Prompt:
- Write a function called mumble that accepts a single string argument.
- The function should return a string that has each character repeated the number of times according to its position within the string arg.  In addition, each repeated section of characters should be separated by a hyphen (-).
- Examples describe it best..
Examples:
mumble('X'); //=> 'X'
mumble('abc'); //=> 'a-bb-ccc'
mumble('121'); //=> '1-22-111'
mumble('!A 2'); //=> '!-AA-   -2222'
-----------------------------------------------------------------*/
//Your solution for 09-mumble here:
function mumble(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    // repeat the char many according to his index
    newStr = newStr + str[i] + str[i].repeat(i);
    // add hyphen
    if (i < str.length - 1) {
      newStr = newStr + "-";
    }
  }

  return newStr;
}
console.log(mumble("X"));
console.log(mumble("abc"));
console.log(mumble("121"));
console.log(mumble("!A 2"));
/*-----------------------------------------------------------------
Challenge: 10-fromPairs
Difficulty: Intermediate
Prompt:
- Write a function named fromPairs that creates an object from an array containing nested arrays.
- Each nested array will have two elements representing key/value pairs used to create key/value pairs in an object to be returned by the function.
- If a key appears in multiple pairs, the rightmost pair should overwrite previous the previous entry in the object.
Examples:
fromPairs([ ['a', 1], ['b', 2], ['c', 3] ]) //=> { a: 1, b: 2, c: 3 }
fromPairs([ ['name', 'Sam"], ['age', 24], ['name', 'Sally'] ]) //=> { name: "Sally", age: 24 }
-----------------------------------------------------------------*/
// Your solution for 10-fromPairs here:
function fromPairs(arr) {
  const items = {};

  //for loop to take the key and its value
  for (const pair of arr) {
    const [item, value] = pair;
    items[item] = value;
  }

  return items;
}
console.log(
  fromPairs([
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ])
);
console.log(
  fromPairs([
    ["name", "Sam"],
    ["age", 24],
    ["name", "Sally"],
  ])
);
