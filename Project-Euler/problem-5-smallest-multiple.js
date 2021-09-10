/*
2520 is the smallest number that can be divided by each of the numbers
from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all
of the numbers from 1 to n?
*/


function smallestMult(n) {
  let factors = [];

  //fill factors array
  for(let i=1; i<=n; i++){
    factors.push(i);
  }

  //test divisibility
  let found = false;
  let val = factors[factors.length - 1];
  let max = factors.reduce((product, el)=>(product *= el));
  let result;
  console.log('max: ', max);

  while(!found && val < max){
    if(checkRemainder(factors, val)){
      result = val;
      found = true;
    }
    val++;
  }
  return result;
}

function checkRemainder(array, val){
  for(let num of array){
    if(val % num === 0) continue;
    return false;
  }
  return true;
}

/* check checkRemainder():
let testArr = [1,2,3];
console.log(checkRemainder(testArr, 6));
*/

console.log(smallestMult(20))
console.log('done');
