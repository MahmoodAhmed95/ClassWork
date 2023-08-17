/*-----------------------------------------------------------------
Challenge: 15-mergeObjects
Difficulty:  Intermediate
Prompt:
- Write a function named mergeObjects that accepts at least two objects as arguments, merges the properties of the second through n objects into the first object, then finally returns the first object.
- If any objects have the same property key, values from the object(s) later in the arguments list should overwrite earlier values.
-----------------------------------------------------------------*/
// Examples:
// console.log(mergeObjects({}, {a: 1}));  //=> {a: 1} (same object as first arg)
// console.log(mergeObjects({a: 1, b: 2, c: 3}, {d: 4}));  //=> {a: 1, b: 2, c: 3, d: 4}
// console.log(mergeObjects({a: 1, b: 2, c: 3}, {d: 4}, {b: 22, d: 44}));  //=> {a: 1, b: 22, c: 3, d: 44}

// Your solution for 15-mergeObjects here:

/* solve the problem by Object.assign */
// function mergeObjects(...objArr) {
//   return Object.assign(...objArr);
// }

/* solve the problem without built in functions*/
function mergeObjects(...objArr) {
  let arr = {};
  for (let i = 0; i < objArr.length; i++) {
    let objEl = objArr[i];
    // console.log(objEl);
    let keys = Object.keys(objEl);
    // console.log(keys);
    for (let j = 0; j < keys.length; j++) {
      let key = keys[j];
      //   console.log(key);
      //   console.log(arr[key]);
      //   console.log(objEl[key]);
      arr[key] = objEl[key];
    }
  }
  //   console.log(arr);
  return arr;
}
console.log(mergeObjects({}, { a: 1 })); //=> {a: 1} (same object as first arg)
console.log(mergeObjects({ a: 1, b: 2, c: 3 }, { d: 4 })); //=> {a: 1, b: 2, c: 3, d: 4}
console.log(mergeObjects({ a: 1, b: 2, c: 3 }, { d: 4 }, { b: 22, d: 44 })); //=> {a: 1, b: 22, c: 3, d: 44}
