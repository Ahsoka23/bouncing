var ball;
var ball2;
var vx = 2;
var vy= 1;
var bc=true;
/*var ballwidth=100
var ballheight=100*/
function setup() {
  createCanvas(400,400);
ball=new BALL(100,200)
ball.movee(-2,0)

ball2 = new BALL(300,200);
ball2.movee(2,0);

 // ball = createSprite(100,100,ballwidth,ballheight);
}

function draw() 
{

  background(51);
  fill("blue");
  ball.cratee()
  ball.bounceOff();
  ball2.cratee()
  fill("black");
  ball2.bounceOff();
  ball.bounce(ball2);
  console.log(ball2.x-ball.x);

  /*if(ball.position.x<=ballwidth/2 || ball.position.x>=width-ballwidth/2||ball.position.y<=ballheight/2 || ball.position.x>=height-ballheight/2)
  {
    vx= -vx;
    vy= -vy
  }
  ball.velocity.x = vx;
  ball.velocity.y=vy
  */
  drawSprites();

}

