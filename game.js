var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer(600, 600);
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();
var start = new PIXI.Sprite(PIXI.Texture.fromImage("assets/start.png"));
var credits = new PIXI.Sprite(PIXI.Texture.fromImage("assets/credits.png"));
var instructs = new PIXI.Sprite(PIXI.Texture.fromImage("assets/instructs.png"));
var background = new PIXI.Sprite(PIXI.Texture.fromImage("assets/background.png"));
var mainMenu = new PIXI.Sprite(PIXI.Texture.fromImage("assets/mainMenu.png"));

//music loader
PIXI.loader
    .add("prologue.mp3")
    .load(ready);
var music;
function ready()
{
  music = PIXI.audioManager.getAudio("assets/prologue.mp3");
}


start.position.x = 250;
start.position.y = 250;
credits.position.x = 250;
credits.position.y = 300;
instructs.position.x = 250;
instructs.position.y = 350;
mainMenu.position.x = 500;
mainMenu.position.y = 525;
stage.addChild(background);
stage.addChild(start);
stage.addChild(credits);
stage.addChild(instructs);
stage.addChild(mainMenu);
mainMenu.visible = false;


function mouseStart(e)
{
  start.visible = false;
  credits.visible = false;
  instructs.visible = false;
  music.play();
  startGame();
}

function mouseCredits(e)
{
  start.visible = false;
  credits.visible = false;
  instructs.visible = false;
  mainMenu.visible = true;

}

function mouseInstructs(e)
{
  start.visible = false;
  credits.visible = false;
  instructs.visible = false;
  mainMenu.visible = true;

}

function mouseMenu(e)
{
  start.visible = true;
  credits.visible = true;
  instructs.visible = true;
  mainMenu.visible = false;

}

start.interactive = true;
start.on('mousedown', mouseStart);
credits.interactive = true;
credits.on('mousedown', mouseCredits);
instructs.interactive = true;
instructs.on('mousedown', mouseInstructs);
mainMenu.interactive = true;
mainMenu.on('mousedown', mouseMenu);


function startGame()
{

}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(stage);
}

animate();
ready();
