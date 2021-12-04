//=================Reference Elements=============================
//Cases Elements
const caseEl = document.getElementsByClassName("case");
const c0El = caseEl[0];
const c1El = caseEl[1];
const c2El = caseEl[2];
const c3El = caseEl[3];
const c4El = caseEl[4];
const c5El = caseEl[5];
const c6El = caseEl[6];
const c7El = caseEl[7];
const c8El = caseEl[8];

//Global Variables
let casesLeft = 9; //number of empty cases
let turn = 1; // 1 player 1 turn, 2 player 2 turn, 0 game stopped

//Tracking Functions
const checkFullBoard = function () {
  casesLeft--;
  console.log("cases left: " + casesLeft); //test
  if (casesLeft === 0) {
    turn = 0; //game stopped
    console.log("No more moves");
  }
};
//======================Lets Play====================================
const player1move = function () {
  if (turn === 1 && this.textContent === "") {
    this.textContent = "X";
    let caseIndex = parseInt(this.id[1]);
    console.log("player 1 moved"); //test
    checkFullBoard();
  }
};

//==========================Event Listners=============================
//Click on cases Listners
c0El.addEventListener("click", player1move);
c1El.addEventListener("click", player1move);
c2El.addEventListener("click", player1move);
c3El.addEventListener("click", player1move);
c4El.addEventListener("click", player1move);
c5El.addEventListener("click", player1move);
c6El.addEventListener("click", player1move);
c7El.addEventListener("click", player1move);
c8El.addEventListener("click", player1move);

// //ways to declare array
// //ways to declare functions

// //function player win.
// //function initial state.
// //function move.
// //use class as arrays better than using id.

//study this

//shortcut for the for loop
//different color for circle
//prevent player from playing before computer make move
//...Operator
//pass array to a funciton???
