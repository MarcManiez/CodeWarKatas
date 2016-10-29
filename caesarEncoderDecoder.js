function movingShift(s, shift) {

    var baseAlpha = "abcdefghijklmnopqrstuvwxyz",
        stringLen = s.length,
        resultArray = [],
        resultString = "",
        runnerLen = Math.ceil(stringLen / 5.0),
        runner = "",
        runnerCount = 0,
        i, j, index = null;
        
    // applies cipher to input string
        
    for (i = 0 ; i < stringLen ; i++) { // loop through input string
    
      var trueShift = shift + i;
    
      if (s[i].charCodeAt(0) >= 65 && s[i].charCodeAt(0) <= 90) { // check if upper alpha case + apply cipher
        index = (s[i].charCodeAt(0) - 65 + trueShift) % 26;
        resultString += baseAlpha[index].toUpperCase();
      } else if (baseAlpha.indexOf(s[i]) !== -1) { // check if lower case alpha + apply cipher
        index = (baseAlpha.indexOf(s[i]) + trueShift) % 26;
        resultString += baseAlpha[index];
      } else { // add char if not alpha
        resultString += s[i];
      }
    }

    // splits ciphered string into an array

    for (i = 0 ; i < stringLen ; i++) {
      runner += resultString[i];
      runnerCount++;
      if (runnerCount === runnerLen) {
        runnerCount = 0;
        resultArray.push(runner);
        runner = "";
      }
    } 
    resultArray.push(runner);
    if (resultArray.length > 5) {resultArray.pop()}
        
    return resultArray;
}

function demovingShift(arr, shift) {
    
    var baseAlpha = "abcdefghijklmnopqrstuvwxyz",
        baseAlphaUpper = baseAlpha.toUpperCase(),
        s = arr.join(''), // joins array into a string
        stringLen = s.length,
        resultString = "",
        i, index = null;

    for (i = 0 ; i < stringLen ; i++) { // loops through the string
    
      var trueShift = (i + shift) % 26,
          upperIndex = baseAlphaUpper.indexOf(s[i]),
          lowerIndex = baseAlpha.indexOf(s[i]);
    
      if (upperIndex !== -1) { // tests for upper case alpha
        if (upperIndex - trueShift >= 0) {
          index = (upperIndex - trueShift);
        } else {
          index = 26 - Math.abs(upperIndex - trueShift);
        }
        resultString += baseAlphaUpper[index];
      } else if (lowerIndex !== -1) {
        if (lowerIndex - trueShift >= 0) {
          index = (lowerIndex - trueShift);
        } else {
          index = 26 - Math.abs(lowerIndex - trueShift);
        }
        resultString += baseAlpha[index];
      } else {
        resultString += s[i];
      }
    }
    
    return resultString;
}
