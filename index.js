//write your code here




function averageInArray(numArray) {
// declare a function named averageInArray that takes in an array of numbers
// initiliaze sum = 0 
// iterate through array and get sum 
// return sum / length of array
  let sum = 0; 
  for (let i = 0 ; i < numArray.length; i++) {
    sum += numArray[i];
  }
  return sum/numArray.length; 
}

console.log(averageInArray([2,4,5,7,8]))    // 5.2
console.log(averageInArray([2,2,5,10]))     // 4.75
console.log(averageInArray([2,2,2,2,2]))    // 2