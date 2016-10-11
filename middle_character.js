function getMiddle(s)
{
  var array = s.split('');
  var arrayLen = array.length;
	return (arrayLen % 2 !== 0) ? array[Math.floor(arrayLen/2)] : array[arrayLen/2-1].concat(array[arrayLen/2]);
}
