function isValidWalk(walk) {
  if (walk.length !== 10) {return false};
  var eastWest =  0;
  var northSouth =  0;
	for (var n in walk) {
  	switch (walk[n]) {
    	case 'w':
      	eastWest--;
        break;
    	case 'e':
      	eastWest++;
        break;
    	case 'n':
      	northSouth++;
        break;
    	case 's':
        northSouth--;
        break;
    }
  }
  return eastWest === northSouth ? true : false;
}
