

var model = {
    boardSize: 7, //board formaat
    numShips: 3, // aantal schepen
    shipLength: 3, // lengte van schepen
    shipsSunk: 0, // nog geen schepen gezonken


	//lege array's
	ships: [
		{ locations: [0, 0, 0], hits: ["", "", ""] }, 
		{ locations: [0, 0, 0], hits: ["", "", ""] },
		{ locations: [0, 0, 0], hits: ["", "", ""] }
	],



    fire: function(guess) {

		for(var i = 0; i < this.numShips; i++) {
			var ship = this.ships[i];
			var index = ship.locations.indexOf(guess);

			// schip locaties 
			if ( ship.hits[index] === "hit" ) {
				view.displayMessage("Deze plek heb je al geraakt");
				return true;
			} else if ( index >= 0 ) {
				ship.hits[index] = "hit";
				view.displayHit(guess);
				view.displayMessage("Hit");

				if ( this.isSunk(ship) ) {
					view.displayMessage("Ship sunk");
					this.shipsSunk++;
				}
				return true;
			}
			$('#guessInput').focus();
        }
        
        //mis
		view.displayMiss(guess);
		view.displayMessage("Miss");
		return false;
    },
    
    //hit 

	isSunk: function(ship) {
		for (var i = 0; i < this.shipLength; i++) {
			if (ship.hits[i] !== "hit") {
				return false;
			}
		}
		$('#guessInput').focus();
		return true;
    },

    //ship genereren + locaties
    
    generateShipLocations: function() {
		var locations;
		for (var i = 0; i < this.numShips; i++) {
		do {
				locations = this.generateShip();
		} while (this.collision(locations));
			this.ships[i].locations = locations;
		}
	},

	generateShip: function() {
		var direction = Math.floor(Math.random() * 2);
		var row, col;

		if (direction === 1) { // horizontaal
			row = Math.floor(Math.random() * this.boardSize);
			col = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
		} else { // verticaal
			row = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
			col = Math.floor(Math.random() * this.boardSize);
		}

		var newShipLocations = [];

		for (var i = 0; i < this.shipLength; i++) {
			if (direction === 1) {
				newShipLocations.push(row + "" + (col + i));
			} else {
				newShipLocations.push((row + i) + "" + col);
			}
		}
		return newShipLocations;
	},

	collision: function(locations) {
		for (var i = 0; i < this.numShips; i++) {
			var ship = this.ships[i];
			for (var j = 0; j < locations.length; j++) {
				if (ship.locations.indexOf(locations[j]) >= 0) {
					return true;
				}
			}
		}
		return false;
	}
};



// aantal guesses

var controller = {
	guesses: 1,

	processGuess: function(guess) {
		var location = parseGuess(guess);
		document.getElementById("countdown").innerHTML = " &nbsp;Guesses: " + this.guesses
		
		// var score_points = this.guesses
		// console.log("this is your " + score_points)

		// var score_ser = JSON.stringify(score_points);

		// localStorage.setItem("score_points", score_ser)

		// var score_des = JSON.parse(localStorage.getItem("score_points"));
		// console.log(score_des)

		

		if (location) {
			this.guesses++;
			var hit = model.fire(location);
			if (hit && model.shipsSunk === model.numShips) {
				
				window.location.href="leaderboard.html";
			}
		}
	}
};



// nummer naar board
function parseGuess(guess) {
	var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

	if (guess === null || guess.length !== 2) {
		alert("Noem een letter en een nummer");
	} else {
		var firstChar = guess.charAt(0);
		var row = alphabet.indexOf(firstChar);
		var column = guess.charAt(1);
		if (isNaN(row) || isNaN(column)) {
			alert("Dit coordinaat");
		} else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
				alert("Coordinaat staat niet op het bord");
		} else {
			return row + column;
		}
	}
	return null;
}


// event handlers firebutton
function handleFireButton() {
	var guessInput = document.getElementById("guessInput");
	var guess = guessInput.value.toUpperCase();
	controller.processGuess(guess);
	guessInput.value = "";
}

function handleKeyPress(e) {
	var fireButton = document.getElementById("fireButton");
	e = e || window.event;
	if (e.keyCode === 13) {
		fireButton.click();
		return false;
	}
}

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        record();
    }
}



// display hit or miss

var view = {
	displayMessage: function(msg) {
		var messageArea = document.getElementById("messageArea");
		messageArea.innerHTML = msg;
	},
	displayHit: function(location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class", "hit");
		playhit();

	},
	displayMiss: function(location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class", "miss");
		playmiss();
	}
};

// geladen pagina
window.onload = init;

function init() {
	// hit button
	var fireButton = document.getElementById("fireButton");
	fireButton.onclick = handleFireButton;
	// input
	var guessInput = document.getElementById("guessInput");
	guessInput.onkeypress = handleKeyPress;
	// schepen wordeen geplaatst
	model.generateShipLocations();
}