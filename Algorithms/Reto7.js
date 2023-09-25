/*
Q 7. Set Matrix Zeroes
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's. 
You must do it in place.

Example 1:
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]
*/


const input =  [[1,1,1],[1,0,1],[1,1,1]];

searchZero()


function searchZero(){
const positionSaved = {positionX: null, positionY: null}
  
  for(i = 0 ; i < input.length; i++){
  	const positionY = input[i].findIndex((item) => item === 0 )

    if(positionY !== -1) {
    	positionSaved.positionX = i
    	positionSaved.positionY = positionY
			break;
    }
  }
  
  console.log(positionSaved)
  changeValues(positionSaved)
}


function changeValues(positions){
	for(i = 0 ; i < input.length; i++){
  	for(j = 0 ; j < input[i].length; j++){
  		 if(i === positions.positionX || j === positions.positionY) {
       		input[i][j] = 0        
       }   
  	}
  }
  console.log('Resultado:',input)
}