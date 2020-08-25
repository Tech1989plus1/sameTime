
exports.sameTime = (arr) => {
  // Checking for if input parameter is an not array or length is
  // less than zero. If true will return zero.
  if (!Array.isArray(arr) || arr.length <= 0) {
    return [];
  }
  
  // Checking for if array doesn't contain another array inside the current 
  // array. And lenght of current array is equal to lenght of 2.
  // If true push current values into element 0 of array. And pop last element.
  if (!Array.isArray(arr[0]) && arr.length === 2) {
     arr[0] = [arr[0], arr[1]];
     arr.pop();
  }
  
  var timeLine = [];

  // Adding first value for comparison
  var same = [arr[0][0], arr[0][1]];

  for (let i = 1; i < arr.length; i++) {
      var time = arr[i];

      // Checking for current time is greater than same
      // ex time = 1990 and same is 1989 (1990 > 1989) true
      if (time[0] > same[0]) {
          same[0] = time[0];
      }

      // Checking for current time is greater than same
      // ex time = 1989 and same is 1990 (1989 < 1990) true
      if (time[1] < same[1]) {
          same[1] = time[1];
      }
  }
  // At the end of for loop same variable should equal sameTime values 
  // of people who live durning the sameTime
  
  for (let i = same[0], j = 0; i <= same[1]; i++, j++) {
       timeLine[j] = i;
  }

  return timeLine;
}