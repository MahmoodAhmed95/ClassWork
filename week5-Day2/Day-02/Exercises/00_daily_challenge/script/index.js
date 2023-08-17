/*-----------------------------------------------------------------
Challenge: 12-hammingDistance
Difficulty: Intermediate
Prompt:
In information theory, the hamming distance refers to the count of the differences between two strings of equal length.  It is used in computer science for such things as implementing "fuzzy search"  capability.
- Write a function named hammingDistance that accepts two arguments which are both strings of equal length.
- The function should return the count of the symbols (characters, numbers, etc.) at the same position within each string that are different.
- If the strings are not of the same length, the function should return NaN.
Examples:
console.log(hammingDistance('abc', 'abc')); //=> 0
console.log(hammingDistance('a1c', 'a2c')); //=> 1
console.log(hammingDistance('!!!!', '****')); //=> 4
console.log(hammingDistance('abc', 'ab')); //=> NaN
-----------------------------------------------------------------*/
// Your solution for 12-hammingDistance here:
function hammingDistance(str, str1) {
  str = str.split("");
  str1 = str1.split("");
  count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.length != str1.length) {
      return "NaN";
    } else if (str[i] === str1[i]) {
      continue;
    } else {
      count += 1;
    }
  }
  return count;
}
console.log(hammingDistance("abc", "abc")); //=> 0
console.log(hammingDistance("a1c", "a2c")); //=> 1
console.log(hammingDistance("!!!!", "****")); //=> 4
console.log(hammingDistance("abc", "ab")); //=> NaN
