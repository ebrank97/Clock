let nums = [
  0x7E, 0x30, 0x6D, 0x79, 0x33, 0x5B, 0x5F, 0x70, 0x7F, 0x7B, 0x77,
  0x1F, 0x4E, 0x3D, 0x4F, 0x47
];
let index = [0, 0, 0, 0];

function setup() {
  createCanvas(800, 400);
  frameRate(1);
}

function calculateTime() {
  let h = hour();
  let m = minute();
  let s = second();
  let t = [];
  t[0] = floor(h / 10);
  t[1] = h % 10;
  t[2] = floor(m / 10);
  t[3] = m % 10;
  t[4] = floor(s / 10);
  t[5] = s % 10;
  return t;
}

function decToHex(d) {
  for (let i = 0; i < nums.length; i++) {
    if (i == d) {
      return nums[i];
    }
  }
}

function draw() {
  background(0);
  let t = calculateTime();
  // console.log(t);
  sevenSegment(decToHex(t[5]), 0);
  sevenSegment(decToHex(t[4]), 80);
  push();
  noStroke();
  fill(200);
  ellipseMode(CENTER);
  ellipse(290, 170, 16, 16);
  ellipse(290, 230, 16, 16);
  pop();
  sevenSegment(decToHex(t[3]), 200);
  sevenSegment(decToHex(t[2]), 280);
  push();
  noStroke();
  fill(200);
  ellipseMode(CENTER);
  ellipse(490, 170, 16, 16);
  ellipse(490, 230, 16, 16);
  pop();
  sevenSegment(decToHex(t[1]), 400);
  sevenSegment(decToHex(t[0]), 480);
}

function getColor(val, shift) {
  let a = 255 * ((val >> shift) & 1);
  let r = floor(random(50, 256));
  let g = floor(random(50, 256));
  let b = floor(random(50, 256));
  return color(0, 0, 255, a);
}

function sevenSegment(h, margin) {
  push();
  //rectMode(CENTER);
  // fill(50);
  strokeWeight(0.3);
  stroke(255);
  noFill();
  let e = 0;

  // A
  fill(getColor(h, 6));
  rect(600 - margin, 135, 60 - e, 10 - e);
  // B
  fill(getColor(h, 5));
  rect(655 - margin, 140, 10 - e, 60 - e);
  // C
  fill(getColor(h, 4));
  rect(655 - margin, 200, 10 - e, 60 - e);
  // D
  fill(getColor(h, 3));
  rect(600 - margin, 255, 60 - e, 10 - e);
  // E
  fill(getColor(h, 2));
  rect(595 - margin, 200, 10 - e, 60 - e);
  // F
  fill(getColor(h, 1));
  rect(595 - margin, 140, 10 - e, 60 - e);
  // G
  fill(getColor(h, 0));
  rect(600 - margin, 195, 60 - e, 10 - e);
  pop();
}