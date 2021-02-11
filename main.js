"use strict";
var dat2 = dat.map(function (_a) {
    var a = _a[0], b = _a[1];
    return [a, b + 1];
});
var total = dat2.map(function (_a) {
    var b = _a[1];
    return b;
}).reduce(function (a, b) { return a + b; });
function getChar() {
    var punct = Math.random();
    if (punct < 9 / 364) {
        return "。";
    }
    else if (punct < 22 / 364) {
        return "，";
    }
    var rand = Math.floor(total * Math.random());
    for (var _i = 0, dat2_1 = dat2; _i < dat2_1.length; _i++) {
        var _a = dat2_1[_i], char = _a[0], num = _a[1];
        if (rand < num) {
            return char;
        }
        rand -= num;
    }
}
