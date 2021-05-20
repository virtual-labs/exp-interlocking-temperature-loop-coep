

PS1Arr = ["above", "below"];

PS4Arr = ["lowest", "highest"];
 

function shuffle(array) {
	  array.sort(() => Math.random() - 0.5);
	}


LC_RandomErrArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];




//this function select Random error
function randomErr_LC(LC_RandomErrArr)
{

return LC_RandomErrArr[Math.floor(Math.random()*LC_RandomErrArr.length)];

}

tansnumArr = [2,3,4];

changinRLArr = [1,2,3,4,5,6,7,8,9,10];

//this function select Random transmitter to be added
function randomtrans(RandomtransArr)
{

return RandomtransArr[Math.floor(Math.random()*RandomtransArr.length)];

}



function getRndInteger(min, max) {
	  return Math.floor(Math.random() * (max - min + 1) ) + min;
	}






function pad(val) {
  valString = val + "";
  if(valString.length < 2) {
     return "0" + valString;
     } else {
     return valString;
     }
}


my_int = 0;

function setTime(minutesLabel, secondsLabel) {
    totalSeconds++;
    secondsLabel.innerHTML = pad(totalSeconds%60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds/60));
    }

function set_timer() {
    minutesLabel = document.getElementById("minutes");
    secondsLabel = document.getElementById("seconds");
    totalSeconds = 0;
    my_int = setInterval(function() { setTime(minutesLabel, secondsLabel)}, 1000);
}

function stop_timer() {
  clearInterval(my_int);
}


