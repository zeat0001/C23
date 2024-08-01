const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ball;
function setup() {
    createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ball_option = {
        restitution: 0.95,
        frictionAir: 0.01
    }
    var ground_options = {
        isStatic: true
      };

      ground = Bodies.rectangle(100,400,400,20,ground_options);
      World.add(world,ground);

   ball = Bodies.circle(100,10,20,ball_option);
   World.add(world, ball);

   rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);

  
  ellipse(ball.position.x, ball.position.y,20);

  rect(ground.position.x,ground.position.y,500,20);
 
console.log(ground.position.y);

}

