// find the symmetric difference between two or more arrays, and return the
// result as an arrays

// working on finding the symmetric difference between just two:—
const firstArr = [1, 2, 3];
const secArr = [2, 3, 4];
const diff = [];

for(x of firstArr){
  for(y of secArr){
    if(x === y){
      diff.push(x);
    }
  }
}



console.log(diff);

console.log(firstArr);
console.log(secArr);
