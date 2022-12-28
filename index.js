function hasTargetSum(array, target) {
  for(let i = 0; i < array.length; i++){
    const compliment = target - array[i];
    for(let j= i+1; j< array.length; j++){
      if (array[j] === compliment) return true 
    }
  }
  return false;
}

/* 
  O(n^2)
*/

/* 
  [3, 8, 12, 4, 11, 7],10
   ^                ^== 10 True
   3+8=11 false
   3+12= 15 false
   3+4=7 false
   3+11= 14 false
   3+7= 10 true-------
   8+12= 20 false
   8+4= 12 false
   8+11= 19 false
   8+7= 15 false
   12+4= 16 false 
   12+11= 23 false 
   12+7= 19 false
   4+11= 15 false
   4+7= 11 false
   11+7= 18 false

*/

/*
  Add written explanation of your solution here
  function hasTargetSum iterates over each number in the array
  for the current index of the array identify which number will
    be needed in order to add up to given target
  iterate over the remaining numbers in the array checking to see
    if the remaining numbers are the compliment
      if so return true
  return false if the array is done
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
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log('')

  console.log('Expecting: false')
  console.log('=>', hasTargetSum([4,6,10,17], 33))

  console.log('')

  console.log('Expecting: true')
  console.log('=>', hasTargetSum([1,2,10,3,4,5], 7))
}

module.exports = hasTargetSum;
