/*

Q 5. Find First and Last Position of Element in Sorted Array
Given an array of integers nums sorted in non-decreasing order, find the
starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].
You must write an algorithm with O(log n) runtime complexity.
Example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

*/

const nums = [5,7,7,8,8,10]
target = 9

console.log(findFirstLastPosition(nums, target))

function findFirstLastPosition(array, target) {
	const result = []
  const indexTargetValue = []
  array.forEach((item, index) => {
  	if(item === target) {
    	indexTargetValue.push(index)
    }
  })
  
  if(indexTargetValue.length) { 
  	return [indexTargetValue[0], indexTargetValue[indexTargetValue.length - 1]]
  }
	
  return [-1,-1]
}
