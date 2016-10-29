function findNb(m) {
    var i = 1;
    var area = 0;
    while (area <= m) {
        area += Math.pow(i,3);
        if (area === m) {
            return i;
        }
        i++;
    }
    return (-1);
}

