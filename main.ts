const dat2: ReadonlyArray<[string, number]> = dat.map(([a,b]) => [a,b+1]);
const total = dat2.map(([,b]) => b).reduce((a,b) => a+b);

function getChar(){

    const punct = Math.random()
    if (punct < 9 / 364) { return "。";}
    else if (punct < 22 / 364) { return "，";}

    let rand = Math.floor(total * Math.random());
    for (let [char, num] of dat2) {
        if (rand < num) { return char; }
        rand -= num;
    }
}