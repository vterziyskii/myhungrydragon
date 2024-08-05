let score, lives; 
const gameTime = 30;
let alcSoundInterval;
let timeleft, gameRunning = 30;
let musicOn = true, soundOn = true, vol = 1;

window.onload = function() {
    document.getElementById("ws-music").play();
}


let clicksound = document.querySelector("#click-sound");
let gameplaymusic = document.querySelector("#gameplaymusic");
let youwon = document.querySelector("#you-win-sound");
let dragonsound = document.querySelector("#dragon-flying-hp");
let wsmusic = document.querySelector("#ws-music");
let clickbuttons = document.querySelector("#clickingbuttons");
let pointadd = document.querySelector("#pointadd");
let loselife = document.querySelector("#loselife");
let youlost = document.querySelector("#you-lost");


window.addEventListener("load", title);

document.querySelector(".music1").addEventListener("click", musicbutton);
document.querySelector(".sound1").addEventListener("click", soundbutton);




function clicksound2() {
    console.log("wrongitem");
    loselife.currentTime = 0;
    loselife.play();
}

function clicksound1() {
    console.log("yay!");
    pointadd.currentTime = 0;
    pointadd.play();
}

function replayhpmusic() {
    wsmusic.play();
}

function playwsmusic(){
    wsmusic.play();
    wsmusic.currentTime =0;
}

function replaygpmusic() {
    gameplaymusic.play();
}

function musicbutton() {
    console.log("musicbutton");
    if(musicOn) {
        musicOn = false;
        wsmusic.muted = true;
        gameplaymusic.muted = true;
        document.querySelector(".music1").classList.add("musicoff1")
        document.querySelector(".music").classList.add("musicoff1")

    } else {
        musicOn = true;
        wsmusic.muted = false;
        gameplaymusic.muted = false;
        document.querySelector(".music1").classList.remove("musicoff1")
        document.querySelector(".music").classList.remove("musicoff1")
    }
}

function soundbutton() {
    console.log("soundbutton");
    if (soundOn) {
        soundOn = false;
        clicksound.muted = true;
        youwinsound.muted = true;
        dragonsound.muted = true;
        clickbuttons.muted = true;
        document.querySelector(".sound1").classList.add("soundoff1")
    } else {
        soundOn = true;
        clicksound = false;
        youwinsound = false; 
        dragonsound = false;
        clickbuttons = false;
        document.querySelector(".sound1").classList.remove("soundoff1")

    }
}


function musicbutton1() {
    console.log("musicbutton");
    if(musicOn) {
        musicOn = false;
        wsmusic.muted = true;
        gameplaymusic.muted = true;
        document.querySelector(".music").classList.add("musicoff1")

    } else {
        musicOn = true;
        wsmusic.muted = false;
        gameplaymusic.muted = false;
        document.querySelector(".music").classList.remove("musicoff1")
    }
}

function soundbutton1() {
    console.log("soundbutton");
    if (soundOn) {
        soundOn = false;
        clicksound.muted = true;
        youwinsound.muted = true;
        dragonsound.muted = true;
        clickbuttons.muted = true;
        document.querySelector(".sound").classList.add("soundoff1")
    } else {
        soundOn = true;
        clicksound = false;
        youwinsound = false; 
        dragonsound = false;
        clickbuttons = false;
        document.querySelector(".sound").classList.remove("soundoff1")

    }
}


function title() {
    console.log ("title")
    hidescreens();
    
    wsmusic.play();
    wsmusic.currentTime =0;
    wsmusic.addEventListener("ended", playwsmusic);
    document.querySelector("#title_screen").classList.remove("hidden");
    document.querySelector(".playgame").addEventListener("click", start );
    document.querySelector(".instructions").addEventListener("click", instructions);
}


function instructions() {
    clickbuttons.play();
    console.log("how-to-play");
    hidescreens();
    document.querySelector("#how-to-play").classList.remove("hidden");
    document.querySelector("#play-htp").addEventListener("click", start);
    document.querySelector("#home-htp").addEventListener("click", title);
} 

function stopallsounds() {
    wsmusic.pause();
    clicksound.pause();
    gameplaymusic.pause();
    youwinsound.pause();
    dragonsound.pause();
    wsmusic.pause();
    clickbuttons.pause();
    welcomescreenmusic =0;
    clicksound =0;
    gameplaymusic =0;
    youwinsound =0;
    dragonsound =0;
    wsmusic =0;
    clickbuttons =0;
}

function hidescreens() {
    document.querySelector("#title_screen").classList.add("hidden");
    document.querySelector("#how-to-play").classList.add("hidden");
    document.querySelector("#you_win").classList.add("hidden");
    document.querySelector("#you_lose").classList.add("hidden");
    document.querySelector("#game").classList.add("hidden");
    document.querySelector("#screen").offsetHeight;
}

document.querySelector("#home").addEventListener("click", title); 

function start() {
    console.log("start");
    
    hidescreens();
    clickbuttons.muted=false;
    
    
    document.querySelector("#game").classList.remove("hidden");
    gameRunning = true;
    score = 0;
    lives = 4;
    timeleft = 30;
    timeleft = gameTime;
    printTime();
    

    document.querySelector("#good_item1").classList.add("position1");
    document.querySelector("#good_item1").classList.add("fallDown");
    document.querySelector("#good_item1").classList.add("speed1");
    document.querySelector("#good_item2").classList.add("position4");
    document.querySelector("#good_item2").classList.add("fallDown");
    document.querySelector("#good_item2").classList.add("speed3");
    document.querySelector("#good_item3").classList.add("position3");
    document.querySelector("#good_item3").classList.add("fallDown");
    document.querySelector("#good_item3").classList.add("speed6");
    document.querySelector("#good_item4").classList.add("position5");
    document.querySelector("#good_item4").classList.add("fallDown");
    document.querySelector("#good_item4").classList.add("speed8");
    document.querySelector("#good_item5").classList.add("position2");
    document.querySelector("#good_item5").classList.add("fallDown");
    document.querySelector("#good_item5").classList.add("speed3");
    
    // Bad elements
    document.querySelector("#bad_item1").classList.add("position4");
    document.querySelector("#bad_item1").classList.add("fallDown");
    document.querySelector("#bad_item1").classList.add("speed7");
    document.querySelector("#bad_item2").classList.add("position2");
    document.querySelector("#bad_item2").classList.add("fallDown");
    document.querySelector("#bad_item2").classList.add("speed3");
    document.querySelector("#bad_item3").classList.add("position1");
    document.querySelector("#bad_item3").classList.add("fallDown");
    document.querySelector("#bad_item3").classList.add("speed6");

    document.querySelector("#bad_item1").addEventListener("click", clickbaditem);
    document.querySelector("#bad_item1").addEventListener("animationiteration", squeezedbaditem);
    document.querySelector("#bad_item2").addEventListener("click", clickbaditem);
    document.querySelector("#bad_item2").addEventListener("animationiteration", squeezedbaditem);
    document.querySelector("#bad_item3").addEventListener("click", clickbaditem);
    document.querySelector("#bad_item3").addEventListener("animationiteration", squeezedbaditem);

  /* good objects */

    document.querySelector("#good_item1").addEventListener("click", clickApple);
    document.querySelector("#good_item1").addEventListener("animationiteration", squeezedApple);
    document.querySelector("#good_item2").addEventListener("click", clickApple);
    document.querySelector("#good_item2").addEventListener("animationiteration", squeezedApple);
    document.querySelector("#good_item3").addEventListener("click", clickApple);
    document.querySelector("#good_item3").addEventListener("animationiteration", squeezedApple);
    document.querySelector("#good_item4").addEventListener("click", clickApple);
    document.querySelector("#good_item4").addEventListener("animationiteration", squeezedApple);
    document.querySelector("#good_item5").addEventListener("click", clickApple);
    document.querySelector("#good_item5").addEventListener("animationiteration", squeezedApple);
  

    document.querySelector(".music").addEventListener("click", musicbutton1);
    document.querySelector(".sound").addEventListener("click", soundbutton1);
    document.querySelector("#points").textContent = `${score} : points`;
    document.querySelector("#life"+lives).classList.remove("heart");
    document.querySelector("#life"+lives).classList.add("brokenheart");
    document.querySelector("#clock").textContent= timeleft;
    document.querySelector("#time").textContent = `${timeleft}`;
    

}


/* Points, lives, time */

/* document.querySelector("#points").textContent= score + ": points";
document.querySelector("#points").textContent=` ${score}: points`;
document.querySelector("#life"+lives).classList.remove("heart");
document.querySelector("#life"+lives).classList.add("brokenheart");
document.querySelector("#time").textContent=timeleft;
document.querySelector("#time").textContent=`${timeleft}`; */

/* Functions */

function clickApple(){
    console.log("clickApple");
    console.log(this);
    this.classList.add("stop");
    //this.firstElementChild.addEventListener("click", clickApple);
    this.firstElementChild.classList.add("glow");
    this.firstElementChild.addEventListener("animationend", restartApple);
    pointadd.play();
    getAPoint();
    clicksound1();
}

function restartApple(){
    console.log("restartApple");
    console.log(this)
    this.parentNode.classList.value="";
    this.classList.value="";
    this.removeEventListener("animationend", restartApple);

    document.querySelector("html").offsetHeight;
    let rndPos =generateRandomNumber();
    this.parentNode.classList.add("position" + rndPos);
    rndPos = generateRandomNumber();
    this.parentNode.classList.add("speed" + rndPos);
    this.parentNode.classList.add("fallDown");
    this.parentNode.addEventListener("click", clickApple);
}

function squeezedApple(){
    console.log("squeezedApple");
    console.log(this);
    this.classList.value = "";
    this.firstElementChild.classList.value = "";
    document.querySelector("html").offsetHeight;
    let rndPos = generateRandomNumber();
    this.classList.add("position" + rndPos);
    rndPos = generateRandomNumber();
    this.classList.add("speed" + rndPos);
    this.classList.add("fallDown");
}

function clickbaditem(){
    console.log("clickbaditem");
    console.log(this);
    this.classList.add("stop");

    this.removeEventListener("click", clickbaditem);
    this.firstElementChild.classList.add("zoom");
    this.firstElementChild.addEventListener("animationend", restartbaditem);
    loseALife();
} 

function squeezedbaditem(){
    console.log("squeezedbaditem");
    console.log(this);
    this.classList.value = "";
    this.firstElementChild.classList.value = "";
    document.querySelector("html").offsetHeight;
    let rndPos = generateRandomNumber();
    this.classList.add("position" + rndPos);
    rndPos = generateRandomNumber();
    this.classList.add("speed" + rndPos);
    this.classList.add("fallDown");
}

function restartbaditem(){
    console.log("restartbaditem");
    console.log(this)
    this.parentNode.classList.value="";
    this.classList.value="";
    this.removeEventListener("animationend", restartbaditem);

    document.querySelector("html").offsetHeight;
    let rndPos =generateRandomNumber();
    this.parentNode.classList.add("position" + rndPos);
    rndPos = generateRandomNumber();
    this.parentNode.classList.add("speed" + rndPos);
    this.parentNode.classList.add("fallDown");
    this.parentNode.addEventListener("click", clickbaditem);
}

function generateRandomNumber() {
    console.log("generateRandomNumber");
    return Math.floor(Math.random() * 5+1 );
}


function getAPoint() {
    console.log("getAPoint");
    score++;
    document.querySelector("#points").textContent= score + ": points";
    document.querySelector("#points").textContent=` ${score} : points`;
    if (score > 14) {
        gameOver();
    }
}

function loseALife() {
    console.log("loseALife");
    lives--;
    if (lives < 2) {
        youLose()
    } 
    document.querySelector("#life"+lives).classList.remove("heart");
    document.querySelector("#life"+lives).classList.add("brokenheart")
}
    
function winGame() {
    gameRunning = false;
    console.log("wingame");
    pauseElements();
    hidescreens();
    document.querySelector("#you_win").classList.remove("hidden");
    document.querySelector("#playagain1").addEventListener("click", restartGame);
    document.querySelector("#backhome1").addEventListener("click", title);
    youwon.play();
    stopallsounds();
}

function youLose() {
    gameRunning = false;
    console.log("youLose")
    pauseElements();
    hidescreens();
    document.querySelector("#you_lose").classList.remove("hidden");
    document.querySelector("#playagain").addEventListener("click", restartGame);
    document.querySelector("#backhome").addEventListener("click", title);
    youlost.play();
    stopallsounds();
}


/* TIMER */

function starttimer() {
    console.log ("starttimer");
    if (timeleft === 0) {
        gameOver();
    } else {
        setTimeout (printTime, 1000);
    }
}

function printTime() {
    console.log("printTime");
    if (timeleft > 0) {
        timeleft--;
        console.log("timeleft: " + timeleft);
        starttimer();
        document.querySelector("#time").textContent = timeleft;
    } else {
        youLose();
    }
} 



function gameOver() {
    console.log("gameOver");
    gameRunning=false

    document.querySelector("#good_item1").classList.value = "";
    document.querySelector("#good_item1").classList.value = "";
    document.querySelector("#good_item2").classList.value = "";
    document.querySelector("#good_item2").classList.value = "";
    document.querySelector("#good_item3").classList.value = "";
    document.querySelector("#good_item3").classList.value = "";
    document.querySelector("#good_item4").classList.value = "";
    document.querySelector("#good_item4").classList.value = "";
    document.querySelector("#good_item5").classList.value = "";
    document.querySelector("#good_item5").classList.value = "";
    document.querySelector("#bad_item1").classList.value = "";
    document.querySelector("#bad_item2").classList.value = "";
    document.querySelector("#bad_item3").classList.value = "";

    document.querySelector(".dragon").classList.value="";

    document.querySelector("#good_item1").removeEventListener("animationiteration", squeezedApple);
    document.querySelector("#good_item2").removeEventListener("animationiteration", squeezedApple);
    document.querySelector("#good_item3").removeEventListener("animationiteration", squeezedApple);
    document.querySelector("#good_item4").removeEventListener("animationiteration", squeezedApple);
    document.querySelector("#good_item5").removeEventListener("animationiteration", squeezedApple);
    document.querySelector("#bad_item1").removeEventListener("animationiteration", squeezedbaditem);
    document.querySelector("#bad_item2").removeEventListener("animationiteration", squeezedbaditem);
    document.querySelector("#bad_item3").removeEventListener("animationiteration", squeezedbaditem);

    if (score > 14) {
        winGame();
    } else {
        youLose();
    }
}

function pauseElements() {

    document.querySelector("#good_item1").classList.value = "";
    document.querySelector("#good_item1").classList.value = "";
    document.querySelector("#good_item2").classList.value = "";
    document.querySelector("#good_item2").classList.value = "";
    document.querySelector("#good_item3").classList.value = "";
    document.querySelector("#good_item3").classList.value = "";
    document.querySelector("#good_item4").classList.value = "";
    document.querySelector("#good_item4").classList.value = "";
    document.querySelector("#good_item5").classList.value = "";
    document.querySelector("#good_item5").classList.value = "";
    document.querySelector("#bad_item1").classList.value = "";
    document.querySelector("#bad_item2").classList.value = "";
    document.querySelector("#bad_item3").classList.value = "";

    document.querySelector("#middle-ground").classList.value="";

    document.querySelector("#good_item1").removeEventListener("animationiteration", squeezedApple);
    document.querySelector("#good_item2").removeEventListener("animationiteration", squeezedApple);
    document.querySelector("#good_item3").removeEventListener("animationiteration", squeezedApple);
    document.querySelector("#good_item4").removeEventListener("animationiteration", squeezedApple);
    document.querySelector("#good_item5").removeEventListener("animationiteration", squeezedApple);
    document.querySelector("#bad_item1").removeEventListener("animationiteration", squeezedbaditem);
    document.querySelector("#bad_item2").removeEventListener("animationiteration", squeezedbaditem);
    document.querySelector("#bad_item3").removeEventListener("animationiteration", squeezedbaditem);
    hidescreens();
}


function restartGame() {
    console.log("restartGame");
    document.querySelector("#screen").offsetHeight;
    document.querySelector("#you_lose").classList.add("hidden");
    document.querySelector("#you_win").classList.add("hidden");
    document.querySelector("#life1").classList.remove("brokenheart");
    document.querySelector("#life2").classList.remove("brokenheart");
    document.querySelector("#life3").classList.remove("brokenheart");
    document.querySelector("#life1").classList.add("heart");
    document.querySelector("#life2").classList.add("heart");
    document.querySelector("#life3").classList.add("heart");
    wsmusic.play();
    wsmusic.addEventListener("ended", playwsmusic);
    start(); 
}