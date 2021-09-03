// find the symmetric difference between two or more arrays, and return the
// result as an arrays

// working on finding the symmetric difference between just two:—
const firstArr = [1, 2, 3];
const secArr = [2, 3, 4];
const arrays = [firstArr, secArr];

//I don't think I understand recursion well enough yet
function testRecursively(arrays){
  if(arrays.length <= 2) return testFull(arrays[0], arrays[1]);
  return testRecursively()
}

function testFull(f, s){
  const diff = [];
  testPart(f,s,diff);
  testPart(s,f,diff);
  return diff;
}

function testPart(first, second, diff){
  console.log('testPart runs...');
  for(x of first){
    let match = false;

    //check for any matches in second array
    for(y of second){
      if(x === y){
        match = true;
        console.log('matched ', x);
        break;
      }
    }
    //if there was no match in second array
    //and the unmatched element doesn't already exist in the diff array
    //push to diff

    if(!match && diff.indexOf(x) === -1){
      console.log('pushing...', x);
      diff.push(x);
    }
  }
}

//run the test!
testRecursively(arrays);

//log result
console.log(testFull(firstArr, secArr));
