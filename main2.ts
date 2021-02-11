const second_syllable_dat2: ReadonlyArray<[string, number]> = syllable_dat.map(([a,b]) => [a,b+1]);
const second_total = second_syllable_dat2.map(([,b]) => b).reduce((a,b) => a+b);

const entropy_of_second_syllable = second_syllable_dat2.map(([,b]) => b).map(b => -(b/second_total) * Math.log(b/second_total) * Math.LOG2E).reduce((a,b) => a+b);

function get_second_syllable(){
    let rand = Math.floor(second_total * Math.random());
    for (let [char, num] of second_syllable_dat2) {
        if (rand < num) { return char; }
        rand -= num;
    }
}

const syllable_dat2: ReadonlyArray<[string, number]> = syllable_dat.filter(([a,])=> a.slice(-1) !== "5").map(([a,b]) => [a,b+1]);
const syllable_total = syllable_dat2.map(([,b]) => b).reduce((a,b) => a+b);

const entropy_of_first_syllable = syllable_dat2.map(([,b]) => b).map(b => -(b/syllable_total) * Math.log(b/syllable_total) * Math.LOG2E).reduce((a,b) => a+b);

function get_first_syllable(){
    let rand = Math.floor(syllable_total * Math.random());
    for (let [char, num] of syllable_dat2) {
        if (rand < num) { return char; }
        rand -= num;
    }
}