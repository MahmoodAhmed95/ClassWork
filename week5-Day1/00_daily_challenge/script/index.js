/*-----------------------------------------------------------------
Challenge: 11-isPalindrome
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

/*-----------------------------------------------------------------
UNCOMMENT TO TEST YOUR FUNCTION 
-----------------------------------------------------------------*/
// console.log(isPalindrome("SEI Rocks")); //=> false
// console.log(isPalindrome("rotor")); //=> true
// console.log(isPalindrome("A nut for a jar of tuna")); //=> true
// console.log(isPalindrome("")); //=> true
// console.log(isPalindrome("radar"));      // Output: true
// console.log(isPalindrome("level"));      // Output: true
// console.log(isPalindrome("civic"));      // Output: true
// console.log(isPalindrome("rotor"));      // Output: true
// console.log(isPalindrome("madam"));      // Output: true
// console.log(isPalindrome("kayak"));      // Output: true
// console.log(isPalindrome("racecar"));    // Output: true
// console.log(isPalindrome("refer"));      // Output: true
// console.log(isPalindrome("deified"));    // Output: true
// console.log(isPalindrome("noon"));       // Output: true

function isPalindrome(str) {
  str = str.replace(/\s/g, "");
  str = str.toLowerCase();
  let strArr = str.split("");
  strArr.reverse();
  let StrRev = strArr.join("");
  if (str == StrRev) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome("SEI Rocks")); //=> false
console.log(isPalindrome("rotor")); //=> true
console.log(isPalindrome("A nut for a jar of tuna")); //=> true
console.log(isPalindrome("")); //=> true
console.log(isPalindrome("radar")); // Output: true
console.log(isPalindrome("level")); // Output: true
console.log(isPalindrome("civic")); // Output: true
console.log(isPalindrome("rotor")); // Output: true
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("kayak")); // Output: true
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("refer")); // Output: true
console.log(isPalindrome("deified")); // Output: true
console.log(isPalindrome("noon")); // Output: true
