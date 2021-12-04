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

const player1move = function () {
  this.textContent = "X";
  let caseIndex = parseInt(this.id[1]);
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
