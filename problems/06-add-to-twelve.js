/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:
addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false

Understand the problem:
input: an array of numbers
output: a boolean of wether two consecutive numbers add up to 12

Create a plan:
1. define a function addToTwelve that takes in arr of numbers
2. create a base case to return false if our arr length is 1 or less
3. create a another base case to return true if two indices add up to 12
  -if the indices do not add up to twelve
    -use arr.shigt() to pop off the first element of our arr so that it may no longer be compared to the next value
4. return our function to iterate through and continue comparing
***********************************************************************/
function addToTwelve(arr){
  if (arr.length <= 1){
    return false;
  }
  if (arr[0] + arr[1] === 12){
    return true;
  } else {
    arr.shift()
    return addToTwelve(arr)
  }
}



/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}
