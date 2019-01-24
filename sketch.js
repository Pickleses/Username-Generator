let button;
let sel;
let searchinp;
let forceA, forceB, forceC;
let A, B, C;
let final;

function setup() {
  //createCanvas(1000, 1000);
  searchinp = createInput("Required words go here");

  sel = createSelect();
  // sel.position(10, 10);
  sel.option(1);
  sel.option(5);
  sel.option(10);
  sel.option(50);
  button = createButton("Generate");
  button.mousePressed(Generate);

}

function Generate() {
	for (var i = 0; i < sel.value(); i++) {
		makeName();
    }
}

//else console.log("not found");

function makeName() {
  let num = floor(random(0, adjs.length));
  let num1 = floor(random(0, nouns.length));
  let num2 = floor(random(0, finisher.length));
  //
  // if (searchinp.value() == "") {
  //   console.log("this");
  //   A = adjs[num];
  //   B = nouns[num1];
  //   C = finisher[num2];
  // } else {
  if (adjs.indexOf(searchinp.value()) != -1) {
    A = adjs[adjs.indexOf(searchinp.value())];
    forceA = true;
  } else {
    A = adjs[num];
  }
  if (nouns.indexOf(searchinp.value()) != -1) {
    B = nouns[nouns.indexOf(searchinp.value())];
    forceB = true;
  } else {
    B = nouns[num];
  }
  if (finisher.indexOf(searchinp.value()) != -1) {
    C = finisher[finisher.indexOf(searchinp.value())];
    forceC = true;
  } else {
    C = finisher[num];
  }
  // let A =
  //   adjs.indexOf(searchinp.value()) != -1
  //     ? adjs[adjs.indexOf(searchinp.value())]
  //     : adjs[num];
  //
  // let B =
  //   nouns.indexOf(searchinp.value()) != -1
  //     ? nouns[nouns.indexOf(searchinp.value())]
  //     : nouns[num];
  //
  // let C =
  //   finisher.indexOf(searchinp.value()) != -1
  //     ? finisher[finisher.indexOf(searchinp.value())]
  //     : finisher[num];
  // }

  let chance = random(0, 1);
  let chance1 = random(0, 1);

  if (!forceA && !forceC) {
    if (chance > 0.0 && chance < 0.25) {
      createP(A + B);
    } else if (chance > 0.25 && chance < 0.5) {
      let newnum = floor(random(0, adjs.length));
      let A2 = adjs[newnum];
      createP(A + A2 + B);
    } else if (chance > 0.5 && chance < 0.75) {
      createP(A + B + C);
    } else if (chance > 0.75 && chance < 1) {
      createP(B + C);
    }
  }
  //> 0 < 33
  //>33< 66
  //> 66 < 100
  if (forceA) {
    if (chance > 0 && chance < 0.33) {
      createP(A + B);
    } else if (chance > 0.33 && chance < 0.66) {
      let newnum = floor(random(0, adjs.length));
      let A2 = adjs[newnum];
      createP(A + A2 + B);
    } else if (chance > 0.66 && chance < 1) {
      createP(A + B + C);
    }
  }
  if (forceC) {
    if (chance > 0.5) {
      createP(A + B + C);
    } else {
      createP(B + C);
    }
  }

  // if (chance < 0.3) {
  //   if (chance1 < 0.5) {
  //     return A + B;
  //   } else return B + C;
  // } else {
  //   return A + B + C;
  // }
}
