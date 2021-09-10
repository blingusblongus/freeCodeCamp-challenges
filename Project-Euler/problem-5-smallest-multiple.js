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
  console.log(factors)
  return true;
}

function checkRemainder(array, val){
  for(let num of array){
    if(val % num === 0) continue;
    return false;
  }
  return true;
}

let testArr = [1,2,3];
console.log(checkRemainder(testArr, 7));
smallestMult(20);
