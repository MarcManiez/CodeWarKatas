function race(v1, v2, g) {
    var time = g / (v2 - v1);
    var hours = Math.floor(time);
    var minutes = Math.floor((time * 60) % 60);
    var seconds = Math.floor((time * 3600) % 60);
    return (v1 <= v2) ? [hours, minutes, seconds] : null;
}
