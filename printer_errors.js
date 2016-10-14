function printerError(s) {
    var array = s.split('');
    var fail = 0;
    var total = 0;
    for (var n in array) {
    	(array[n] <= 'm') ? total ++: total++ && fail++;
    }
    return fail + "/" + total;
}
