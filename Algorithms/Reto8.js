/*
Ejercicio
Q.8 Pascal´s Triangle
Given an integer numRows, return the first numRows of Pascal´s triangle.
In Pascal´s triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:
Input: numRows = 5
outpud : [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

*/

var generate = (numRows) => {
	const array = [[1]]
    for(i = 0; i < numRows ; i++ ) {
  		const aux = []

      console.log(array) 
      
      for(j = 0; j < array[i].length + 1; j++ ) {
      
     	  if(array[i].length === 1) {
     	    aux.push(1)
     	  } else {
         const init = 0
         const final = array[i].length
         
        	if(j === init || j === final) { 
            aux.push(1)
          } else { 
          	aux.push(array[i][j-1] + array[i][j] )
          }
        }        
      }
       array.push(aux)
    } 
};

generate(5)
