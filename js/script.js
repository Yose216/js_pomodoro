var compteur;
var son = new Audio("Audio/371.ogg")
var tache = document.getElementById("task").value; 

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    compteur = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
        	document.getElementById("timer").innerHTML = "00:00";
			clearInterval(compteur);
			son.play();
            Tache_fait();
            alert(tache + ' finie\n' + 'Une Pause?')
        }
    }, 1000);
}
$(document).ready(function(){
	$("#play").click(function () {
    var fiveMinutes = 60 * 25,
        display = $('#timer');
    startTimer(fiveMinutes, display);
	});
  $("#pause").click(myPauseFunction);
  $("#stop").click(myStopFunction);
 });
 
 function myPauseFunction() {
    clearInterval(compteur);
}
function myStopFunction () {
	document.getElementById("timer").innerHTML = "00:00";
	clearInterval(compteur);
}

function Tache_fait () {
    var tache = document.getElementById("task").value; 
    document.getElementById("fait").innerHTML = tache;
}

