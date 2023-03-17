// The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

// console.log(sum(range(1, 10)));

// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

function range(start, end) {
  const result = [];

  for (let i = start; i <= end; i++) {
    result.push(i);
  }

  return result;
}

// console.log(range(1, 10)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.


function sum(numbers) {
  let result = 0;

  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }

  return result;
}

// console.log(sum(range(1, 10))); // Output: 55



// Modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. 
// Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

function range(start, end, step = 1) {
  const result = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      result.push(i);
    }
  }
  return result;
}

// console.log(range(1, 10, 2)); // Output: [1, 3, 5, 7, 9]
// console.log(range(5, 2, -1)); // Output: [5, 4, 3, 2]



// write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. 
// The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.


function reverseArray(arr) {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

function reverseArrayInPlace(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}


//Example. let arr = [1, 2, 3, 4, 5];
// let reversedArr = reverseArray(arr);
// let reversedArrInPlace = reverseArrayInPlace(arr);

// console.log(reversedArr); // [5, 4, 3, 2, 1]
// console.log(reversedArrInPlace); // [5, 4, 3, 2, 1]


// Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list. 
// Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.
 

function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(element, list) {
  return {value: element, rest: list};
}

function nth(list, n) {
  if (!list) {
    return undefined;
  } else if (n === 0) {
    return list.value;
  } else {
    return nth(list.rest, n - 1);
  }
}

// Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

// To find out whether values should be compared directly (use the === operator for that) or have their properties compared, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".

// The Object.keys function will be useful when you need to go over the properties of objects to compare them.

function deepEqual(a, b) {
  if (a === b) {
    // Values are the same or are identical objects
    return true;
  }

  if (typeof a != 'object' || typeof b != 'object' || a == null || b == null) {
    // Values are not both objects or one of them is null
    return false;
  }

  // Compare properties recursively
  let keysA = Object.keys(a);
  let keysB = Object.keys(b);
  if (keysA.length != keysB.length) {
    // Objects have different number of properties
    return false;
  }
  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
      // Objects have different property names or values
      return false;
    }
  }

  return true;
}
