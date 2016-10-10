function findOdd(A) {
  var newList = {};
  for (var n in A) {
  	  newList[A[n]] = newList[A[n]] ? newList[A[n]]+1 : 1;
  }
  for (var i in newList) {
    if (newList[i] % 2 !== 0) {
    	return Number(i);
    }
  }
  return 0;
};
