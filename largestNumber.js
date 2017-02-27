function largestOfFour(arr) {
  // initial idea
  // loop through each element of the initial array
  // sort each sub array 
  // grab the last number of each sorted sub array
  var arrayOfLargestNumbers = []
  // sort each sub array
  for (var i = 0; i < arr.length; i++) {
    arr[i].sort(function(a,b) {
      return a - b;
    });
    var largest = null;
    for (var sb = 0; sb < arr[i].length; sb++) {
      largest = arr[i][(arr[i].length -1)];
    }
    arrayOfLargestNumbers[i] = largest;
  }
  //take last element of each sub array
  return arrayOfLargestNumbers;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
