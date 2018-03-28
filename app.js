// alert("up and running!");


//create track for player 1
var player1 = ["11","12","13","14","15","16"];
var player2 = ["21","22","23","24","25","26"];
var player1Count =0;
var player2Count =0;
var won = false;
var winner = "";

function move(key){	
	//check previous round winner
	if (won){
		console.log("game is completed");
		console.log(winner);
		return;
	}



// now move the player
	if (key == 'a' && player1Count <= player1.length-1) {
		console.log(player1Count);
		console.log("player 1", player1[player1Count]);
		document.getElementById(player1[player1Count]).className="off";
		player1Count++;
		document.getElementById(player1[player1Count]).className="on";
		console.log(player1Count);
	}

	if(key =='l' && player2Count <= player2.length){
		console.log("player 2", player2[player2Count]);
		document.getElementById(player2[player2Count]).className="off";
		player2Count++;
		document.getElementById(player2[player2Count]).className="on";
	}


// after moving the player check if the reached the finish
	if(player1Count == player1.length-1){
		won = true;
		winner="player1";
		console.log("game is completed");
		console.log(winner);
		return;
	}

	if(player2Count == player2.length-1){
		won = true;
		winner="player2";
		console.log("game is completed");
		console.log(winner);
		return;
	}
}






