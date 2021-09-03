// find the symmetric difference between two or more arrays, and return the
// result as an arrays

// working on finding the symmetric difference between just two:—
const firstArr = [1, 2, 3];
const secArr = [2, 3, 4];
const sim = [];
const diff = [];

function testPart(first, second){
  for(x of first){
    let match = false;

    //check for any matches in second array
    for(y of second){
      if(x === y){
        match = true;
        break;
      }
    }

    //if there was no match in second array
    //and the unmatched element doesn't already exist in the diff array
    //push to diff
    if(!match && diff.indexOf(x) !== -1){
      diff.push(x);
    }
  }
}


console.log('sim: ', sim);
console.log('diff: ', diff);
console.log('firstArr before:', firstArr);


for(el of sim){
  firstArr.splice(firstArr.indexOf(el));
}

console.log('firstArr after: ', firstArr);





console.log(firstArr);
console.log(secArr);
