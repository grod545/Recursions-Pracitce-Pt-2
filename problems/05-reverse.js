/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""

Understand the problem:
input: a string
ouput: our input string reversed

Create a plan:
1. define a function reverse that intakes a str
2. create a base case
  -if str.length is 0 we can return an empty str
3. create a recursive case
  -create a let variable to hold our res
  -in our res grab our using .substring or .slice and throw it into our reverse function
  -add this result to our remaining string element at index 0
4. return our res (recursive case)
***********************************************************************/


function reverse(str) {
if (str.length === 0) {
  return ""
  }
  let res = reverse(str.slice(1)) + str[0]
  return res
}
reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
