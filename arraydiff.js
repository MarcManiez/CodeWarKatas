function array_diff(a, b) {
    var i = 0;
    for (n in b) {
        while (a[i]) {
            if (b[n] === a[i]) {
                a.splice(i,1);
                i--;
                }
            i++;
            }
        }
    return a;
}
