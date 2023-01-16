// 1ª parte
function average(...args) {
    let avg = 0;

    for (let value in args) {
        avg += args[value];
    }

    console.log(avg / args.length);
}

average(1, 2, 3, 4, 5);
average(12, 23, 34, 45, 54);

// 2ª parte
let vetor = [12, 23, 34, 45, 56, 67, 78, 89, 90];

function mediaHarmonica(...args) {
    let elemInv = 0;

    for (let entry in args) {
        elemInv += 1/args[entry];
    }

    let medHarm = args.length / elemInv;

    return medHarm;
}

vetor.reduce(mediaHarmonica);
