// global constants
const clueHoldTime = 1000; //how long to hold each clue's light/sound
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var cluePauseTime = 333; //how long to pause in between clues
var mistakes = 0;

function randomValue(max) {
  var value = Math.floor(Math.random() * Math.floor(max));
  while(value == 0) {
    value = Math.floor(Math.random() * Math.floor(max));
  }
  return value;
}

function startGame(){
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  mistakes = 0;
  
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  for(let i=0; i<randomValue(10); i++){
    pattern[i] = randomValue(7);
  }
  playClueSequence();
}

function stopGame(){
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 150,
  2: 200,
  3: 300,
  4: 400,
  5: 500,
  6: 600
}

function playTone(btn){
  document.getElementById("button"+btn+"Audio").play();
  tonePlaying = true;
  setTimeout(function(){
    stopTone(btn)
  },clueHoldTime);
}

function stopTone(btn1){
  document.getElementById("button"+btn1+"Audio").pause();
  document.getElementById("button"+btn1+"Audio").currentTime = 0;
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime - 3 ** guessCounter; 
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Congratulation! You win.");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }

  if(pattern[guessCounter] == btn){
    if(progress == guessCounter){
      if(progress == pattern.length-1){
        winGame();
      }
      else{
        progress++;
        playClueSequence();
      }
    }
    else{
      guessCounter++;
    }
  }
  else{
    if(mistakes <= 1){
      mistakes++;
    }
    else{
      loseGame();
    }
  }
}