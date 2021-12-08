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
let turn = 0; // 1 player 1 turn, 2 player 2 turn, 0 game stopped
//Board Situation
const boardSituation = new Array(9).fill(0);
//List of empty cases
const casesLeftIndexes = [0, 1, 2, 3, 4, 5, 6, 7, 8];

//Randomely select which player move first
const playerToStart = function () {
  turn = Math.floor(Math.random() * 2 + 1);
  console.log(`Player ${turn} goes first`);
};

//Tracking Functions
//checkWin;
//precondition:
//turn = 1 or turn = 2
const checkWin = function () {
  let winner = 3 - turn; //since turns are inversed before making the call. we inverse them back
  if (
    (boardSituation[0] === winner &&
      boardSituation[1] === winner &&
      boardSituation[2] === winner) ||
    (boardSituation[0] === winner &&
      boardSituation[3] === winner &&
      boardSituation[6] === winner) ||
    (boardSituation[0] === winner &&
      boardSituation[4] === winner &&
      boardSituation[8] === winner) ||
    (boardSituation[1] === winner &&
      boardSituation[4] === winner &&
      boardSituation[7] === winner) ||
    (boardSituation[2] === winner &&
      boardSituation[5] === winner &&
      boardSituation[8] === winner) ||
    (boardSituation[2] === winner &&
      boardSituation[4] === winner &&
      boardSituation[6] === winner) ||
    (boardSituation[3] === winner &&
      boardSituation[4] === winner &&
      boardSituation[5] === winner) ||
    (boardSituation[6] === winner &&
      boardSituation[7] === winner &&
      boardSituation[8] === winner)
  ) {
    turn = 0;
    console.log("checkWinner stopped the game");
    if (winner === 2) {
      //maybe I should have one gameOver and call it once.
      console.log("You Lose");
      gameOver(winner);
    } else if (winner === 1) {
      console.log("You Win");
      gameOver(winner);
    }
  } else {
    console.log("No Winner");
    return false;
  }
};
const checkFullBoard = function () {
  casesLeft--;
  console.log("cases left: " + casesLeft); //test
  if (casesLeft === 0) {
    turn = 0; //game stopped
    console.log("No more moves");
    return true;
  }
};
//should be the same for playe 1 and 2
const updateBoard = function (caseIndex) {
  boardSituation[caseIndex] = turn;
  //tester
  let myvar = "";
  for (let i = 0; i < 9; i++) {
    myvar = myvar + " " + boardSituation[i];
  }
  console.log("boardSituation: " + myvar);
};
//should be used on player 1 too??
const updatecasesLeftIndexes = function (caseIndex) {
  //Precondition: takes caseIndex as number between 0 and 8
  //looks for caseIndex amongs emtyCaseTracker elements
  //if it finds return it's index.

  let m = casesLeftIndexes.indexOf(caseIndex);
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
const gameOver = function (winner) {
  if (winner === 1) {
    document.getElementsByTagName("p")[0].textContent = "X";
    document.getElementsByTagName("p")[1].textContent = "You win";
  } else {
    document.getElementsByTagName("p")[0].textContent = "O";
    document.getElementsByTagName("p")[1].textContent = "You lose";
    document.getElementById("gameOver").classList.add("stroke-txt");
  }
  // document.getElementById("gameOver").style.display = "flex";
  document.getElementById("gameOver").classList.add("transform");
};

//======================Lets Play====================================

console.log(document.getElementById("gameOver"));

const player1move = function () {
  if (turn === 1 && this.textContent === "") {
    this.textContent = "X";
    let caseIndex = parseInt(this.id[1]);
    console.log("player 1 moved"); //test
    updateBoard(caseIndex); //before changing the turn
    updatecasesLeftIndexes(caseIndex);
    turn = 2;
    checkWin() || checkFullBoard(); //change turn to 0 if board full. should be after turn change
    player2move();
  }
};
//why not put the whole player2move inside the setTimeout
const player2move = function () {
  if (turn === 2) {
    console.log("player 2 thinking");

    setTimeout(function () {
      let caseRandom = Math.floor(Math.random() * casesLeft);
      let caseIndex = casesLeftIndexes[caseRandom];
      console.log("player 2 moved");
      updateBoard(caseIndex); //before changing turn
      updatecasesLeftIndexes(caseIndex);
      caseEl[caseIndex].classList.add("stroke-txt");
      caseEl[caseIndex].textContent = "O";
      // turn = 0;//didn't work why??/
      turn = 1;
      checkWin() || checkFullBoard(); //must be executed after turn = 1; or we can use a condition. or maybe turn = check@in()||checkFullBoard()
    }, 600); //doesn't stop player 1 from playing

    //why not use turn 0 to stop player1 from playing somehow
    // // gameOver();
  }
};
playerToStart();
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
