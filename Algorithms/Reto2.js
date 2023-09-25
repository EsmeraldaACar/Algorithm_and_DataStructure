/* 
Q 2. Find the Duplicate Number Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive. There is only one repeated number in nums, return this repeated number. You must solve the problem without modifying the array nums and uses only constant extra space. 
Example 1: Input: nums = [1,3,4,2,2] Output: 2

*/



const nums = [1,3,4,2,2]

const repitedNumber = findRepitedNumber(nums)
  console.log('respited number:', repitedNumber)

function findRepitedNumber(array) {
  array.sort()
  
    for(i=0; i < array.length; i++ ){
    console.log(i)
      if(array[i] === array[i+1]) return array[i]
    }

}
