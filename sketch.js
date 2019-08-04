function setup() {
  createCanvas(1280, 720);
  frameRate(1);
}

let i = 0;

function draw() {
  textSize(32);
  text('HH:MM:SS');
  fill(0);
  background('black')
  clock_face()
}

function clock_face(){
  seconds_face(second());
  minutes_face(minute());
  hours_face(hour());
}

function hours_face(tim){
  let digit_1 = Math.floor(tim / 10) % 10;
  let digit_2 = tim % 10;
  stroke('white');
  strokeWeight(5);
  //Units Place
  fill(255 * ((digit_2 >> 3) & 1), 0, 0 );
  ellipse(250, 100, 50, 50);
  fill(255 * ((digit_2 >> 2) & 1), 0, 0 );
  ellipse(250, 250, 50, 50);
  fill(255 * ((digit_2 >> 1) & 1), 0, 0 );
  ellipse(250, 400, 50, 50);
  fill(255 * ((digit_2 >> 0) & 1), 0, 0 );
  ellipse(250, 550, 50, 50);
  //Tens Place
  fill(255 * ((digit_1 >> 1) & 1), 0, 0 );
  ellipse(100, 400, 50, 50);
  fill(255 * ((digit_1 >> 0) & 1), 0, 0 );
  ellipse(100, 550, 50, 50);
}

function minutes_face(tim){
  let digit_1 = Math.floor(tim/10) % 10;
  let digit_2 = tim % 10;
  stroke('white');
  strokeWeight(5);
  //Units Place
  fill(255 * ((digit_2 >> 3) & 1), 0, 0 );
  ellipse(550, 100, 50, 50);
  fill(255 * ((digit_2 >> 2) & 1), 0, 0 );
  ellipse(550, 250, 50, 50);
  fill(255 * ((digit_2 >> 1) & 1), 0, 0 );
  ellipse(550, 400, 50, 50);
  fill(255 * ((digit_2 >> 0) & 1), 0, 0 );
  ellipse(550, 550, 50, 50);
  //Tens Place
  fill(255 * ((digit_1 >> 2) & 1), 0, 0 );
  ellipse(400, 250, 50, 50);
  fill(255 * ((digit_1 >> 1) & 1), 0, 0 );
  ellipse(400, 400, 50, 50);
  fill(255 * ((digit_1 >> 0) & 1), 0, 0 );
  ellipse(400, 550, 50, 50);
}

function seconds_face(tim){
  let digit_1 = Math.floor(tim/10) % 10;
  let digit_2 = tim % 10;
  stroke('white');
  strokeWeight(5);
  //Units Place
  fill(255 * ((digit_2 >> 3) & 1), 0, 0 );
  ellipse(850, 100, 50, 50);
  fill(255 * ((digit_2 >> 2) & 1), 0, 0 );
  ellipse(850, 250, 50, 50);
  fill(255 * ((digit_2 >> 1) & 1), 0, 0 );
  ellipse(850, 400, 50, 50);
  fill(255 * ((digit_2 >> 0) & 1), 0, 0 );
  ellipse(850, 550, 50, 50);
  //Tens Place
  fill(255 * ((digit_1 >> 2) & 1), 0, 0 );
  ellipse(700, 250, 50, 50);
  fill(255 * ((digit_1 >> 1) & 1), 0, 0 );
  ellipse(700, 400, 50, 50);
  fill(255 * ((digit_1 >> 0) & 1), 0, 0 );
  ellipse(700, 550, 50, 50);
}