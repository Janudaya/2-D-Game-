var runsound = new Audio("run.mp3");
var jumpsound = new Audio(" jump.mp3");




function keycheck(event) {
    var keycode = event.which;
      //alert(keycode);

    if (keycode == 13) {//enter
        if (runWorker == 0) {
            runWorker = setInterval(run, 100);
            runsound.play();

            backgroundWorker = setInterval(background, 100);
            scoreworker = setInterval(updatescore,100);
            boxworker = setInterval(moveboxes,100);
           

        }
    }
    if (keycode == 32) {//spase

      if (jumpWorker==0){
         clearInterval(runWorker);
         runsound.pause();
     
         jumpWorker= setInterval(jump,100);
         jumpsound.play();
        }
       
    }
}
var runImagenumber = 1;
var runWorker = 0;

function run() {
    runImagenumber = runImagenumber + 1;

    if (runImagenumber == 17) {
        runImagenumber = 1;

    }
    document.getElementById("boy").src = "run " + runImagenumber + ".png";


}
var backgroundpositionX = 0;
var backgroundWorker = 0;

function background() {
 
    backgroundpositionX = backgroundpositionX - 20;

    document.getElementById("background").style.backgroundpositionX = backgroundpositionX + "px";
}

var jumpImageNumber= 1;
var jumpWorker= 0;
var boyMarginTop = 400;

function jump() {
    if (jumpImageNumber<=4){
        boyMarginTop= boyMarginTop -30;
        document.getElementById("boy").style.marginTop=boyMarginTop + "px";

    }
    if (jumpImageNumber>=5){

        boyMarginTop = boyMarginTop +30;
        document.getElementById("boy").style.marginTop = boyMarginTop + "px";
    }

    jumpImageNumber = jumpImageNumber+ 1;

    if (jumpImageNumber == 9 ) {
        jumpImageNumber = 1;
        clearInterval(jumpWorker);
        runWorker = setInterval(run,100);
        runsound.play();
        jumpWorker=0;

       if(backgroundWorker == 0) {
         backgroundWorker = setInterval(background, 100);
       }    
       if (scoreworker == 0) {
           scoreworker = setInterval(updatescore,100);
       } 
       if (boxworker == 0) {
           boxworker = setInterval(moveboxes, 100);
       }
    }
    document.getElementById("boy").src = "jump " + jumpImageNumber + ".png";

}  

var score=0;

var scoreworker=0;

function updatescore() {
    score = score + 3;
    document.getElementById("score"). innerHTML=score;
}

var bml = 300;


function createboxes() {
    for (var i = 0; i < 10; i++ ) {
        bml = bml + 600;

        var box = document. createElement ("div");
        box.className = "box";
        box.id = "box" + i ;

        box.style.marginLeft = bml + "px";

        document.getElementById("background").appendChild(box);

    }
}

var boxworker = 0;

function moveboxes(){
    for(var i = 0; i < 1; i++) {
        var newbox = document.getElementById ("box" + i );
        var boxml = getcomputedStyle(newbox).marginLeft;
        var newboxml = parseInt(boxml) - 20;
        newbox.style.marginLeft = newboxml + "px" ;

        alert(newboxml);
        //80 - 200
    }
}