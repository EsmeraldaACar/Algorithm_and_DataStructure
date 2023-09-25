/*
Q 6. Length of Last Word
Given a string s consisting of words and spaces, return the length of the last word in the string.
A word is a maximal substring consisting of non-space characters only.
Example 1:
Input: s = "Hello World"
Output: 5
*/

const s = "Hello World"

console.log(lastWordLength(s))

function lastWordLength(value) {
	const cadenas = value.split(' ')
	  
  return cadenas[cadenas.length -1].length 
}