function XO(str) {
    if (!str.match(/[Xx]/g) && str.match(/[Oo]/g)) {return false};
    if (str.match(/[Xx]/g) && !str.match(/[Oo]/g)) {return false};
		if (!str.match(/[Xx]/g) && !str.match(/[Oo]/g)) {return true};
    var xs = str.match(/[Xx]/g).length;
    var os = str.match(/[Oo]/g).length;
    return (xs === os) ? true :false;
}
