Math.round = function(number) {

  var array = number.toString().split(''), i = 0, arrayLen = array.length;
  
  while (i < arrayLen) {
    if (array[i] === '.') {
      if (Number(array[i+1]) >= 5) {
        return Number(array.slice(0,i).join('')) + 1;
      } else {
        return Number(array.slice(0,i).join(''));
      }
    }
    i++;
  }
  
  return Number(array.join(''));
  
};

Math.ceil = function(number) {

  var array = number.toString().split(''), i = 0, arrayLen = array.length;
  
  while (i < arrayLen) {
    if (array[i] === '.') {
      return Number(array.slice(0,i).join('')) + 1;
    }
    i++;
  }
  
  return Number(array.join(''));
  
};

Math.floor = function(number) {

    var array = number.toString().split(''), i = 0, arrayLen = array.length;
  
  while (i < arrayLen) {
    if (array[i] === '.') {
      return Number(array.slice(0,i).join(''));
    }
    i++;
  }
  
  return Number(array.join(''));
  
};
