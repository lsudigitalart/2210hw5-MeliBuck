var r = 0;
var t = 0;
var bDir = 1;
var ry = 0;
var ty = 0;

function setup(){
  createCanvas(800,500);
  background(255);
  angleMode(DEGREES);
}

function draw (){
// left corner
push()
  translate(0,0);
  r=r+10;

  if(t > 600){
    bDir = 0;
    ry = random(height/2);
    ty = random(height/2);
    }
  if(t < 0){
    bDir = 1;
    ry = random(height/2);
    ty = random(height/2);
    }
  if(bDir==1){
    t++;
  } else{
    t--;
  }
  translate(t,ty);
  rotate(r);
  stroke (55,50,95,80);
  rect(0,0,1,4);
pop()

// right corner
push()
  translate(200,0)
  r=r+10;

  if(t > 600){
    bDir =0;
    ry = random(height/2);
    ty = random(height/2);
    }
  if(t < 0){
    bDir = 1
    ry = random(height/2);
    ty = random(height/2);
  }
  if(bDir==1){
    t++;
  }else{
    t--;
  }
  translate(t,ty);
  rotate(r);
  stroke (150,100,100,90);
  fill(150,100,100,90);
  rect(0,0,1.5,5);
  pop()

// left bottom corner
push()
  translate(0,250)
  r=r+10

  if(t > 600){
    bDir = 0;
    ry = random(height/2);
    ty = random(height/2);
    }
  if(t < 0){
    bDir = 1;
    ry = random(height/2);
    ty = random(height/2);
    }
  if(bDir==1){
    t++;
  } else{
    t--;
  }
  translate(t,ty);
  rotate(r);
  stroke (220,200,100,95);
  rect(0,0,1,4);
pop()

// right bottom corner
push()
  translate(200,250,800,500)
  r=r+10

  if(t > 600){
    bDir =0;
    ry = random(height/2);
    ty = random(height/2);
    }
  if(t < 0){
    bDir = 1
    ry = random(height/2);
    ty = random(height/2);
  }
  if(bDir==1){
    t++;
  }else{
    t--;
  }
  translate(t,ty);
  rotate(r);
  stroke (70,120,80,70);
  fill(70,120,80,70);
  rect(0,0,1.5,5);
  pop()

}
