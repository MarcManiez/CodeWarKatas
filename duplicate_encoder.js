function duplicateEncode(word){
    var lowerWord = word.toLowerCase();
    var array = lowerWord.split('');
    var result = [];
    function HowMany(array, item) {
    	var result = 0;
      for (var n in array) {
      	if (array[n] === item) {result++}
      }
      return result;
    }
    for (i = 0 ; i < array.length ; i++) {
        if (HowMany(array, array[i]) > 1) {
            result.push(')');
        } else {
            result.push('(');
        }
    }
    return result.join('');
}
