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
let turn = 2; // 1 player 1 turn, 2 player 2 turn, 0 game stopped
//Board Situation
const boardSituation = new Array(9).fill(0);
//List of empty cases
const casesLeftIndexes = [0, 1, 2, 3, 4, 5, 6, 7, 8];

//Tracking Functions
const checkFullBoard = function () {
  casesLeft--;
  console.log("cases left: " + casesLeft); //test
  if (casesLeft === 0) {
    turn = 0; //game stopped
    console.log("No more moves");
  }
};
//should be the same for playe 1 and 2
const updateBoard = function (caseIndex) {
  console.log("caseIndex: " + caseIndex);
  boardSituation[caseIndex] = turn;
  //tester
  let myvar = "";
  for (let i = 0; i < 9; i++) {
    myvar = myvar + " " + boardSituation[i];
  }
  console.log("boardSituation: " + myvar);
};
const updatecasesLeftIndexes = function (caseIndex) {
  //Precondition: takes caseIndex as number between 0 and 8
  //looks for caseIndex amongs emtyCaseTracker elements
  //if it finds return it's index.

  let m = casesLeftIndexes.indexOf(caseIndex);
  console.log("caseIndex: " + caseIndex);
  // console.log(casesLeft);
  console.log("m: " + m);
  //swap
  [casesLeftIndexes[m], casesLeftIndexes[casesLeft - 1]] = [
    casesLeftIndexes[casesLeft - 1],
    [casesLeftIndexes[m]],
  ];
  casesLeftIndexes.pop();
  //test swap
  let myvar = "";
  for (let i = 0; i < casesLeftIndexes.length; i++) {
    myvar = myvar + " " + casesLeftIndexes[i];
  }
  console.log("casesLeftIndexes: " + myvar);
};
//======================Lets Play====================================
const player1move = function () {
  if (turn === 1 && this.textContent === "") {
    this.textContent = "X";
    let caseIndex = parseInt(this.id[1]);
    console.log("player 1 moved"); //test
    updateBoard(caseIndex); //before changing the turn
    turn = 2;
    checkFullBoard(); //change turn to 0 if board full.
  }
};

const player2move = function () {
  if (turn === 2) {
    console.log("player 2 moved");
    let caseRandom = Math.floor(Math.random() * casesLeft);
    let caseIndex = casesLeftIndexes[caseRandom];
    updateBoard(caseIndex); //before changing turn
    // boardSituation[caseIndex] = turn;
    // let myvar = "";
    // for (let i = 0; i < 9; i++) {
    //   myvar = myvar + " " + boardSituation[i];
    // }
    // console.log("boarderSituation: " + myvar);
    caseEl[caseIndex].textContent = "O";

    //   // console.log(turn);
    // }, 300);
    turn = 1; //why not use turn 0 to stop player1 from playing somehow
    updatecasesLeftIndexes(caseIndex);
    checkFullBoard();
    // // checkWin();
    // // gameOver();
    // console.log(`cases left: ${casesLeft}`);
  }
};

player2move();

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
