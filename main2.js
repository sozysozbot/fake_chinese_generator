"use strict";
var second_syllable_dat2 = syllable_dat.map(function (_a) {
    var a = _a[0], b = _a[1];
    return [a, b + 1];
});
var second_total = second_syllable_dat2.map(function (_a) {
    var b = _a[1];
    return b;
}).reduce(function (a, b) { return a + b; });
var entropy_of_second_syllable = second_syllable_dat2.map(function (_a) {
    var b = _a[1];
    return b;
}).map(function (b) { return -(b / second_total) * Math.log(b / second_total) * Math.LOG2E; }).reduce(function (a, b) { return a + b; });
function get_second_syllable() {
    var rand = Math.floor(second_total * Math.random());
    for (var _i = 0, second_syllable_dat2_1 = second_syllable_dat2; _i < second_syllable_dat2_1.length; _i++) {
        var _a = second_syllable_dat2_1[_i], char = _a[0], num = _a[1];
        if (rand < num) {
            return char;
        }
        rand -= num;
    }
}
var syllable_dat2 = syllable_dat.filter(function (_a) {
    var a = _a[0];
    return a.slice(-1) !== "5";
}).map(function (_a) {
    var a = _a[0], b = _a[1];
    return [a, b + 1];
});
var syllable_total = syllable_dat2.map(function (_a) {
    var b = _a[1];
    return b;
}).reduce(function (a, b) { return a + b; });
var entropy_of_first_syllable = syllable_dat2.map(function (_a) {
    var b = _a[1];
    return b;
}).map(function (b) { return -(b / syllable_total) * Math.log(b / syllable_total) * Math.LOG2E; }).reduce(function (a, b) { return a + b; });
function get_first_syllable() {
    var rand = Math.floor(syllable_total * Math.random());
    for (var _i = 0, syllable_dat2_1 = syllable_dat2; _i < syllable_dat2_1.length; _i++) {
        var _a = syllable_dat2_1[_i], char = _a[0], num = _a[1];
        if (rand < num) {
            return char;
        }
        rand -= num;
    }
}
