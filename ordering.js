function order(words){
  if (!words) {return ""};
  var disorder = words.split(" ");
  var order = [];
  var i = 1;
  while (i <= disorder.length) {
  	for (var n in words) {
    	if (disorder[n].includes(i)) {
      	order.push(disorder[n]);
        break;
      };
  	}
  	i++;
  }
  return order.join(" ");
}
