var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer(600, 600);
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();
var start = new PIXI.Sprite(PIXI.Texture.fromImage("assets/start.png"));
var credits = new PIXI.Sprite(PIXI.Texture.fromImage("assets/credits.png"));
var instructs = new PIXI.Sprite(PIXI.Texture.fromImage("assets/instructs.png"));
var background = new PIXI.Sprite(PIXI.Texture.fromImage("assets/background.png"));
var mainMenu = new PIXI.Sprite(PIXI.Texture.fromImage("assets/mainMenu.png"));
var leftUpper = new PIXI.Sprite(PIXI.Texture.fromImage("assets/leftupper.png"));
var rightUpper = new PIXI.Sprite(PIXI.Texture.fromImage("assets/rightupper.png"));
var leftLower = new PIXI.Sprite(PIXI.Texture.fromImage("assets/leftlower.png"));
var rightLower = new PIXI.Sprite(PIXI.Texture.fromImage("assets/rightlower.png"));
var creditsScreen = new PIXI.Sprite(PIXI.Texture.fromImage("assets/creditsScreen.png"));
var instructScreen = new PIXI.Sprite(PIXI.Texture.fromImage("assets/instructScreen.png"));
var simonArray = [];


function randomSimon(min, max)
{
  return Math.floor(Math.random() * (max - min)) + min;
}

start.position.x = 250;
start.position.y = 250;
credits.position.x = 250;
credits.position.y = 300;
instructs.position.x = 250;
instructs.position.y = 350;
mainMenu.position.x = 500;
mainMenu.position.y = 525;
instructScreen.position.x = 50;
instructScreen.position.y = 100;



// simon says positions
leftUpper.position.x = 0;
leftUpper.position.y = 0;
rightUpper.position.x = 300;
rightUpper.position.y = 0;
leftLower.position.x = 0;
leftLower.position.y = 300;
rightLower.position.x = 300;
rightLower.position.y = 300;
creditsScreen.position.x = -300;
creditsScreen.position.y = -300;
instructScreen.position.x = -300;
instructScreen.position.y = -300;
stage.addChild(background);
stage.addChild(leftUpper);
stage.addChild(rightUpper);
stage.addChild(leftLower);
stage.addChild(rightLower);

stage.addChild(creditsScreen);
stage.addChild(instructScreen);
stage.addChild(start);
stage.addChild(credits);
stage.addChild(instructs);
stage.addChild(mainMenu);
PIXI.loader
    .add("assets/prologue.mp3")
    .load(ready);

var backgroundSound;
//music loader


function ready()
{
  backgroundSound = PIXI.audioManager.getAudio("assets/prologue.mp3");
}
//simon says stage loader

instructScreen.visible = false;
creditsScreen.visible = false;
mainMenu.visible = false;
leftLower.visible = false;
rightLower.visible = false;
leftUpper.visible = false;
rightUpper.visible = false;


function mouseStart(e)
{
  start.visible = false;
  credits.visible = false;
  instructs.visible = false;
  background.visible = false;
  //simon says load in
  leftUpper.visible = true;
  rightUpper.visible = true;
  leftLower.visible = true;
  rightLower.visible = true;
  mainMenu.visible = true;
  backgroundSound.play();


  for(i = 0; i < 10; i++)
  {
    simonArray[i] = randomSimon(0,3);

    if(simonArray[i] = 0)
    {

    }
    if(simonArray[i] = 1)
    {

    }
    if(simonArray[i] = 2)
    {

    }
    if(simonArray[i] = 3)
    {

    }

  }
}

function mouseCredits(e)
{
  start.visible = false;
  credits.visible = false;
  instructs.visible = false;
  creditsScreen.visible = true;
  mainMenu.visible = true;
  createjs.Tween.get(creditsScreen.position).to({x: 0, y: 0}, 1000, createjs.Ease.bounceOut);

}

function mouseInstructs(e)
{
  start.visible = false;
  credits.visible = false;
  instructs.visible = false;
  mainMenu.visible = true;
  instructScreen.visible = true;
  createjs.Tween.get(instructScreen.position).to({x: 0, y: 0}, 1000, createjs.Ease.bounceOut);
}

function mouseMenu(e)
{
  background.visible = true;
  start.visible = true;
  credits.visible = true;
  instructs.visible = true;
  mainMenu.visible = false;
  creditsScreen.visible = false;
  instructScreen.visible = false;
  leftLower.visible = false;
  rightLower.visible = false;
  leftUpper.visible = false;
  rightUpper.visible = false;
  creditsScreen.position.x = -300;
  creditsScreen.position.y = -300;
  instructScreen.position.x = -300;
  instructScreen.position.y = -300;
}

start.interactive = true;
start.on('mousedown', mouseStart);
credits.interactive = true;
credits.on('mousedown', mouseCredits);
instructs.interactive = true;
instructs.on('mousedown', mouseInstructs);
mainMenu.interactive = true;
mainMenu.on('mousedown', mouseMenu);

function mouseLeftU(e)
{

}
function mouseLeftL(e)
{

}
function mouseUpperU(e)
{

}
function mouseUpperL(e)
{

}
//simon says interaction
leftUpper.interactive = true;
leftUpper.on('mousedown', mouseLeftU);

leftLower.interactive = true;
leftLower.on('mousedown', mouseLeftL);

rightUpper.interactive = true;
rightUpper.on('mousedown', mouseUpperU);

rightLower.interactive = true;
rightLower.on('mousedown', mouseUpperL);



function animate()
{
  requestAnimationFrame(animate);
  renderer.render(stage);

}

animate();
