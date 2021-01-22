
temp = 0;


TCS_PS1Arr = ["above", "below"];

TCS_PS4Arr = ["lowest", "highest"];
 

function shuffle(array) {
	  array.sort(() => Math.random() - 0.5);
	}


TC_RandomErrArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];




//this function select Random error
function randomErr_TC(TC_RandomErrArr)
{

return TC_RandomErrArr[Math.floor(Math.random()*TC_RandomErrArr.length)];

}

TCS_tansnumArr = [2,3,4];

TCS_changinRLArr = [1,2,3,4,5,6,7,8,9,10];

//this function select Random transmitter to be added
function randomtrans(RandomtransArr)
{

return RandomtransArr[Math.floor(Math.random()*RandomtransArr.length)];

}



function getRndInteger(min, max) {
	  return Math.floor(Math.random() * (max - min + 1) ) + min;
	}