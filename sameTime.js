var SameTime = (arr) => {
  if (!Array.isArray(arr) && time.length < 0) {
    return [];
  }
  
  var timeLine = [];
  var same = [arr[0][0], arr[0][1]];

  for (let i = 1; i < arr.length; i++) {
      var time = arr[i];

      if (time[0] > same[0]) {
          same[0] = time[0];
      }

      if (time[1] < same[1]) {
          same[1] = time[1];
      }
  }
  
  for (let i = same[0], j = 0; i < same[1]; i++, j++) {
       timeLine[j] = i;
  }

  return timeLine;
}