"use strict";
var jpdat2 = jp_dat.map(function (_a) {
    var a = _a[0], b = _a[1];
    return [a, b + 1];
});
var jptotal = jpdat2.map(function (_a) {
    var b = _a[1];
    return b;
}).reduce(function (a, b) { return a + b; });
function getJpChar() {
    var punct = Math.random();
    if (punct >= 0.225585560616645) {
        return "◆";
    }
    var rand = Math.floor(jptotal * Math.random());
    for (var _i = 0, jpdat2_1 = jpdat2; _i < jpdat2_1.length; _i++) {
        var _a = jpdat2_1[_i], char = _a[0], num = _a[1];
        if (rand < num) {
            return char;
        }
        rand -= num;
    }
}
