/*-----------------------------------------------------------------
Challenge: 13-mumble
Difficulty: Intermediate
Prompt:
- Write a function called mumble that accepts a single string argument.
- The function should return a string that has each character repeated the number of times according to its position within the string arg.  In addition, each repeated section of characters should be separated by a hyphen (-).
- Examples describe it best..
Examples:
-----------------------------------------------------------------*/
// console.log(mumble("X")); //=> 'X'
// console.log(mumble("abc")); //=> 'a-bb-ccc'
// console.log(mumble("121")); //=> '1-22-111'
// console.log(mumble("!A 2")); //=> '!-AA-   -2222'

// Your solution for 13-mumble here:
function mumble(str) {
  str = str.split("");
  if (str.length <= 1) {
    return str.join();
  } else {
    for (let i = 0; i < str.length; i++) {
      str[i] = str[i].repeat(i + 1);
    }
    return str.join("-");
  }
}
console.log(mumble("X")); //=> 'X'
console.log(mumble("abc")); //=> 'a-bb-ccc'
console.log(mumble("121")); //=> '1-22-111'
console.log(mumble("!A 2")); //=> '!-AA-   -2222'
