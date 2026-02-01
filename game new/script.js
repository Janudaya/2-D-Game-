var runsound = new Audio("run.mp3");
var jumpsound = new Audio(" jump.mp3");
var deadsound = new Audio("dead.mp3")



function keycheck(event) {
    var keycode = event.which;
      //alert(keycode);

    if (keycode == 13) {//enter
        if (runWorker == 0) {
            runWorker = setInterval(run, 100);
            runsound.play();

            backgroundWorker = setInterval(background,100);
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
var runImageNumber = 0;
var runWorker = 0;

function run() {
     runImageNumber = runImageNumber + 1;

    if (runImageNumber == 15) {
        runImageNumber = 1;

    }
    document.getElementById("boy").src = "run " + runImageNumber + ".png";


}
// background

var backgroundPositionX = 0;
var backgroundWorker = 0;

function background() {
       backgroundPositionX = backgroundPositionX - 20;

       document.getElementById("background").style.backgroundPositionX = backgroundPositionX + "px";
}
// background


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
        jumpWorker= 0;

       if(backgroundWorker == 0) {
         backgroundWorker = setInterval(background, 100);
       }    
       if (scoreWorker == 0) {
           scoreWorker = setInterval(updatescore,100);
       } 
       if (boxworker == 0) {
           boxworker = setInterval(moveboxes, 100);
       }
    }
    document.getElementById("boy").src = "jump " + jumpImageNumber + ".png";

}  

var score=0;

var scoreWorker=0;

function updatescore() {
    score = score + 10;
    document.getElementById("score"). innerHTML=score;
}

var bml = 300;


function createboxes() {
    for (var i = 0; i < 10; i++ ) {
        

        var box = document. createElement ("div");
        box.className = "box";
        box.id = "box" + i ;

        if (i <= 5) {
            bml = bml + 600;  
        }

        if (i >=6) {
            bml = bml + 400;
        }

        

        
        
        
        box.style.marginLeft = bml + "px";

        document.getElementById("background").appendChild(box);

    }
}

var boxworker = 0;

function moveboxes(){
    for(var i = 0; i < 15; i++) {
        var newbox = document.getElementById ("box" + i );
        var boxml = getComputedStyle(newbox).marginLeft;
        var newboxml = parseInt(boxml) - 20;
        newbox.style.marginLeft = newboxml + "px" ;

        //alert(newboxml);
        //90 - -50

        if (newboxml >= 60 & newboxml <= 90 ){
              //alert("DEAD");
            if (boyMarginTop > 365) {
                // alert("dead");

                clearInterval(runWorker) ;
                runWorker = -1;
                runsound.pause();

                clearInterval(jumpWorker) ;
                jumpWorker = -1;
                jumpsound.pause() ;

                clearInterval(backgroundWorker) ;
                backgroundWorker = 1;

                clearInterval(boxworker) ;
                boxworker = -1;

                clearInterval(scoreWorker) ;
                scoreWorker = -1;

                deadWorker = setInterval(dead, 100);
                deadsound.play() ;

            }

        }
    }
}


var deadImageNumber = 1;

var deadWorker = 0;

function dead() {
    deadImageNumber = deadImageNumber + 1;

    if (deadImageNumber == 10) {
        deadImageNumber = 9;
        document.getElementById("boy").style.marginTop = "375px" ;
        document.getElementById("end").style.visibility = "visible";
        document.getElementById("endscore").innerHTML = score;

    }

    document.getElementById("boy").src = "dead " + deadImageNumber + ".png";

}
function reload(){
    location.reload();
}