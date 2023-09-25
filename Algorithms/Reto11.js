/*
FizzBuzz is a children’s game where
you count from 1 to 20. Easy, right?

Here’s the catch: instead of saying
numbers divisible by 3, say “Fizz”.
And instead of saying numbers
divisible by 5, say “Buzz”. For
numbers divisible by both 3 and 5, say
“FizzBuzz”.

“1, 2, Fizz, 4, Buzz”…and so forth

Let’s start by using console.log to
print out all of the numbers from 1
and 20.

But don’t type out the numbers in
order—find a more awesome way

*/

fizzBuzz(30)


function fizzBuzz(n) {
 for(let i = 1; i<= n; i++) {

		if( i % 3 === 0 && i % 5 === 0) {
    	console.log('Fizz Buzz')
    } else if(i % 3 === 0 ) {
      console.log('Fizz')
    } else if( i % 5 === 0) {
    	console.log('Buzz')
    } else {
    	console.log(i)
    }
 }
}