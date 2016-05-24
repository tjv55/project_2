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

//music loader
PIXI.loader
    .add("prologue.mp3")
    .load(ready);
var backgroundSound;

function ready()
{
  backgroundSound = PIXI.audioManager.getAudio("assets/prologue.mp3");
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


stage.addChild(leftUpper);
stage.addChild(rightUpper);
stage.addChild(leftLower);
stage.addChild(rightLower);
stage.addChild(background);
stage.addChild(creditsScreen);
stage.addChild(instructScreen);
stage.addChild(start);
stage.addChild(credits);
stage.addChild(instructs);
stage.addChild(mainMenu);

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

}

function mouseCredits(e)
{
  start.visible = false;
  credits.visible = false;
  instructs.visible = false;
  creditsScreen.visible = true;
  mainMenu.visible = true;

}

function mouseInstructs(e)
{
  start.visible = false;
  credits.visible = false;
  instructs.visible = false;
  mainMenu.visible = true;
  instructScreen.visible = true;
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

}

start.interactive = true;
start.on('mousedown', mouseStart);
credits.interactive = true;
credits.on('mousedown', mouseCredits);
instructs.interactive = true;
instructs.on('mousedown', mouseInstructs);
mainMenu.interactive = true;
mainMenu.on('mousedown', mouseMenu);

//simon says interaction
// leftUpper.interactive = true;
// leftUpper.on('mousedown', mouseMenu);
//
// leftLower.interactive = true;
// leftLower.on('mousedown', mouseMenu);
//
// rightUpper.interactive = true;
// rightUpper.on('mousedown', mouseMenu);
//
// rightLower.interactive = true;
// rightLower.on('mousedown', mouseMenu);



function animate() {
  requestAnimationFrame(animate);
  renderer.render(stage);
}

animate();
