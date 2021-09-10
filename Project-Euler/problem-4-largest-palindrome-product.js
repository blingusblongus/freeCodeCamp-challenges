/*
A palindromic number reads the same both ways.
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers.
*/

function largestPalindromeProduct(n) {

  return true;
}

// helper to check symmetry - works!
function checkSymmetry(num) {
  let str = num.toString();

  for(let i=0; i<str.length/2; i++){
    if(str[i] !== str[(str.length - 1) - i]) return false;
  }
  return true;
}

console.log(checkSymmetry(901209));
largestPalindromeProduct(3);
