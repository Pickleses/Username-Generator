let forceA, forceB, forceC;
let A, B, C;
let final;
let div;
let generated = false;

function setup() {

  select(".button").mousePressed(makeName);
}

function makeName() {
  if (generated) {
	  div.remove();
	  generated = false;
  }
  let num = floor(random(0, adjs.length));
  let num1 = floor(random(0, nouns.length));
  let num2 = floor(random(0, finisher.length));

  if (adjs.indexOf(select(".text").value()) != -1) {
    A = adjs[adjs.indexOf(select(".text").value())];
    forceA = true;
  } else {
    A = adjs[num];
  }
  if (nouns.indexOf(select(".text").value()) != -1) {
    B = nouns[nouns.indexOf(select(".text").value())];
    forceB = true;
  } else {
    B = nouns[num];
  }
  if (finisher.indexOf(select(".text").value()) != -1) {
    C = finisher[finisher.indexOf(select(".text").value())];
    forceC = true;
  } else {
    C = finisher[num];
  }

  let chance = random(0, 1);
  let chance1 = random(0, 1);

  if (!forceA && !forceC) {
    if (chance > 0.0 && chance < 0.25) {
      div = createP(A + B);
    } else if (chance > 0.25 && chance < 0.5) {
      let newnum = floor(random(0, adjs.length));
      let A2 = adjs[newnum];
      div = createP(A + A2 + B);
    } else if (chance > 0.5 && chance < 0.75) {
      div = createP(A + B + C);
    } else if (chance > 0.75 && chance < 1) {
      div = createP(B + C);
    }
  }
  //> 0  < 33
  //> 33 < 66
  //> 66 < 100
  if (forceA) {
    if (chance > 0 && chance < 0.33) {
      div = createP(A + B);
    } else if (chance > 0.33 && chance < 0.66) {
      let newnum = floor(random(0, adjs.length));
      let A2 = adjs[newnum];
      div = createP(A + A2 + B);
    } else if (chance > 0.66 && chance < 1) {
      div = createP(A + B + C);
    }
  }
  if (forceC) {
    if (chance > 0.5) {
      div = createP(A + B + C);
    } else {
      div = createP(B + C);
    }
  }
  div.style("font", "60px Verdana", "sans-serif");
  div.style("color", "#ecf0f1");
  div.style("margin", "150px");
  div.attribute("align", "center");
  generated = true;
}
