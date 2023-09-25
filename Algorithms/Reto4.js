/*  Q 4. Sort Colors
Given an array nums with n objects colored red, white, or blue, sort them in-
place so that objects of the same color are adjacent, with the colors in the
order red, white, and blue.
We will use the integers 0, 1, and 2 to represent the color red, white, and blue,
respectively.
You must solve this problem without using the library's sort function.
Example 1:
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
*/


const input = [2,0,2,1,1,0]
const target = 22

const result = orderArray(input)
console.log(result)

function orderArray(conjunto) { 
const N = conjunto.length 
for (i = 0; i < N; i++){
    for (j = 0; j < N - 1; j++){
        if (conjunto[j] > conjunto[j + 1]){
            tmp = conjunto[j];
            conjunto[j] = conjunto[j + 1];
            conjunto[j + 1] = tmp;
        }
    }
}

return conjunto
   
}