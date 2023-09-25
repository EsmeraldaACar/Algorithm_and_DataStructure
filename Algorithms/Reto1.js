/*Q 1. Binary Search Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
 You must write an algorithm with O(log n) runtime complexity. 
Example 1: Input: nums = [-1,0,3,5,9,12], target = 9 Output: 4 */


const target = 12
const input = [-1,0,3,5,9,12]

const findTarget = searchTargetValue(input, target)

console.log('Target Find :', findTarget)

//Using binary search
function searchTargetValue(array, target){

	let left = 0
	let right = array.length - 1
	  
	  while (left <= right) {
	    const mid = Math.floor((left + right) / 2)
	    if(array[mid] === target) { 
      return  target 
      } else if( array[mid] < target ) {
      	left = mid + 1
      } else {
      	right = mid - 1
      }
	  }
    
    return -1
}