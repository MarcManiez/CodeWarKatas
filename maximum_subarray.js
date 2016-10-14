var maxSequence = function(arr){
  var sum = 0;
  var greatest = 0;
  var n = 0;
  for (var i in arr){
    if (n == (arr.slice(i).length)) {break;};
  	if (arr[i] > 0) {
			for (var n in arr.slice(i)){
        sum += arr.slice(i)[n];
      	if (sum > 0) {
          if (sum > greatest) {greatest = sum};
        } else {
          sum = 0;
          break;
        }
      }
    }
  }
  return greatest;
}
