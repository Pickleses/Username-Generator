let y = 50;
let test = ["test", "yes", "no"];


function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  textSize(50);
  // for (var i = 0; i < 10; i++) {
  //   let final = makeName();
  //   text(final, 50, y);
  //   y += 60;
  //   //  console.log(final);
  // }
  // noLoop();
  console.log(test.indexOf("yes"));

}

function testfunc(test){

}

function makeName() {
  let num = floor(random(0, adjs.length));
  let num1 = floor(random(0, nouns.length));
  let num2 = floor(random(0, finisher.length));

  //ABC 40%
  //AB 30%
  //BC 30%

  //25
  //50
  //75
  //100

  //> 0 < 25
  //> 25 < 50
  //> 50 < 75
  // > 75 < 100

  let A = adjs[num];
  let B = nouns[num1];
  let C = finisher[num2];

  let chance = random(0, 1);
  let chance1 = random(0, 1);

  if(chance > .0 && chance < .25){
    return A + B;
  }
  else if(chance > .25 && chance < .50){

    let newnum = floor(random(0, adjs.length));
    let A2 = adjs[newnum]
    return A + A2 + B;
  }
  else if(chance > .50 && chance < .75){
    return A + B + C;
  }
  else if(chance > .75 && chance < 100){
    return B + C;
  }

  // if (chance < 0.3) {
  //   if (chance1 < 0.5) {
  //     return A + B;
  //   } else return B + C;
  // } else {
  //   return A + B + C;
  // }

}
