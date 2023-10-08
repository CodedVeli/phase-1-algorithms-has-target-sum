function hasTargetSum(array, target) {
  

  for (let i = 0; i < array.length; i++) {
    let slicedArray = array.slice(i + 1);
    for (let j = 0; j < slicedArray.length; j++) {
      if (array[i] + slicedArray[j] === target) {
        return true;
      } 

     
    }
  }
  return false;
  
}


/* 
  Write the Big O time complexity of your function here

  O(n^2) because of the nested for loops

*/

/* 
  Add your pseudocode here
  
    loop through the array
     loop through the array again starting at the next index
     if the sum of the two numbers is equal to the target
   return true
*/

/*
  Add written explanation of your solution here

  I loop through the array and then loop through the array again starting at the next index.
   I then check if the sum of the two numbers is equal to the target. 
   If it is, I return true. 
   If I get through both loops without returning true, I return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5, ], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5, 7], 11));
}

module.exports = hasTargetSum;
