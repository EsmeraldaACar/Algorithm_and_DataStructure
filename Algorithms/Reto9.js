/*
Q 9. Single Element in a Sorted Array
You are given a sorted array consisting of only integers where every element
appears exactly twice, except for one element which appears exactly once.
Return the single element that appears only once.
Your solution must run in O(log n) time and O(1) space.
Example 1:
Input: nums = [1,1,2,3,3,4,4,8,8]
Output: 2

*/

const nums = [1,1,2,3,3,4,4,8,8]

console.log(findNoRepitedValue(nums))

function findNoRepitedValue(array) {
 array.sort()
 let start = 0
 let end = array.length - 1
 
 while(start < end) {
 		let mid = Math.floor((end - start ) / 2)
    
    if( mid % 2 === 1) {
    	mid --
    }
    
    if(array[mid] !== array[mid + 1]) {
    	end = mid
      return array[mid]
    } else {
    	start = mid + 2
    }
        
 }
 return array[left];
}