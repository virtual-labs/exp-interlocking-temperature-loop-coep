
temp = 0;


PCS_PS1Arr = ["above", "below"];

PCS_PS4Arr = ["lowest", "highest"];
 

function shuffle(array) {
	  array.sort(() => Math.random() - 0.5);
	}


PC_RandomErrArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];




//this function select Random error
function randomErr_PC(PC_RandomErrArr)
{

return PC_RandomErrArr[Math.floor(Math.random()*PC_RandomErrArr.length)];

}

PCS_tansnumArr = [2,3,4];

PCS_changinRLArr = [1,2,3,4,5,6,7,8,9,10];

//this function select Random transmitter to be added
function randomtrans(RandomtransArr)
{

return RandomtransArr[Math.floor(Math.random()*RandomtransArr.length)];

}



function getRndInteger(min, max) {
	  return Math.floor(Math.random() * (max - min + 1) ) + min;
	}