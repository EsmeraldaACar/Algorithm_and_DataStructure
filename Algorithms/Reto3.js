/*  Q 3. Search Insert Position
Given a sorted array of distinct integers and a target value, return the index if
the target is found. If not, return the index where it would be if it were inserted
in order.
You must write an algorithm with O(log n) runtime complexity.
Example 1:
Input: nums = [1,3,4,2,2]
Output: 2 
*/


const input = [1,3,4,2,2]
const target = 22

const result = searchInsert(input, target)
console.log(result)

function searchInsert(nums, target) {  
  let result = null
   nums.sort()
    
    for(i = 0; i < nums.length; i++) {
    	
      if(nums[i] === target) { return i}
    
    }
    
   if( target < nums[0]) { return 0}
   if( target > nums[nums.length - 1]) { return nums.length }
   
}