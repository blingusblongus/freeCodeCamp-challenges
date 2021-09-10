/*
A palindromic number reads the same both ways.
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers.
*/

//notes: from getting stuck and researching, it looks like I actually do have to
// brute force it.

function largestPalindromeProduct(n) {
  let numStrHigh = "";
  let numStrLow = "";
  let maxPal = 0;

  //find largest n-digit number and assign to numStr
  for(let i = 0; i<n; i++){
    numStrHigh += "9";
    numStrLow += (i === 0) ? "1" : "0";
  }

  console.log('numStrHigh: ', numStrHigh);
  console.log('numStrLow: ', numStrLow);

  //convert numStr to int
  let upperNum = parseInt(numStrHigh);
  let lowerNum = parseInt(numStrLow);

  //find all products and test for symmetry
  for(let i=lowerNum; i<upperNum + 1; i++){
    for(let j=lowerNum; j<upperNum + 1; j++){
      let product = i*j;

      // if symmetric and bigger than previously found answer, update maxPal;
      if(checkSymmetry(product) && product > maxPal){
        maxPal = product;
      }
    }
  }

  console.log('maxPal: ', maxPal);
  return maxPal;
}

// helper to check symmetry - works!
function checkSymmetry(num) {
  let str = num.toString();

  for(let i=0; i<str.length/2; i++){
    if(str[i] !== str[(str.length - 1) - i]) return false;
  }
  return true;
}

largestPalindromeProduct(3);
