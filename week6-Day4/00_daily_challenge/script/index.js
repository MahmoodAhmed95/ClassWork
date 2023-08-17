/*-----------------------------------------------------------------
Challenge: 19-flatten
Difficulty:  Intermediate
Prompt:
- Write a function named flatten that accepts a single array that may contain nested arrays and returns a new "flattened" array.
- A flattened array is an array that contains no nested arrays.
- Arrays maybe nested at any level.
- If any of the arrays have duplicate values those duplicate values should be present in the returned array.
- The values in the new array should maintain their ordering as shown in the examples below.
Hint:
- This assignment provides an excellent opportunity to use recursion (a function that calls itself).  It can also be solved by using an inner function.

-----------------------------------------------------------------*/

// Examples:
// console.log(flatten( [1, [2, 3]] ));
// //=> [1, 2, 3]  (a new array)
// console.log(flatten( [1, [2, [3, [4]]], 1, 'a', ['b', 'c']] ));
// //=> [1, 2, 3, 4, 1, 'a', 'b', 'c']

// Your solution for 19-flatten here:
function flatten(arr) {
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // recursion to return the arr[i] to the flatten function because its array.
      let flattenRec = flatten(arr[i]);
      //push all the recursion elements in the new array.
      resultArr.push(...flattenRec);
      //   return flatten(arr[i]); // check1
    } else {
      //   result.push(arr[i][i]);// check 2
      //   arr[i] = flatten(arr); // error when run
      //   return flatten(arr[i]); // check 2
      // direct push the element because its not array.
      resultArr.push(arr[i]);
    }
  }
  return resultArr;
}
// Examples:
console.log(flatten([1, [2, 3]]));
//=> [1, 2, 3]  (a new array)
console.log(flatten([1, [2, [3, [4]]], 1, "a", ["b", "c"]]));
//=> [1, 2, 3, 4, 1, 'a', 'b', 'c']
