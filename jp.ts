const jpdat2: ReadonlyArray<[string, number]> = jp_dat.map(([a,b]) => [a,b+1]);
const jptotal = jpdat2.map(([,b]) => b).reduce((a,b) => a+b);

function getJpChar(){

    const punct = Math.random()
    if (punct >= 0.225585560616645) { return "◆";}

    let rand = Math.floor(jptotal * Math.random());
    for (let [char, num] of jpdat2) {
        if (rand < num) { return char; }
        rand -= num;
    }
}