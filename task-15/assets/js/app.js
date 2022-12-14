let cl = console.log;

//=========== DOM Selection ===============//
const changeBodyColor = document.getElementById("changeBodyColor");
const orangeBtn = document.getElementById("orangeBtn");
const greenBtn = document.getElementById("greenBtn");
const blueBtn = document.getElementById("blueBtn");

//=========== Function Expression ===============//
const orangeBody = (event) => changeBodyColor.style.backgroundColor="orange";
const greenBody = (event) => changeBodyColor.style.backgroundColor="green";
const blueBody = (event) => changeBodyColor.style.backgroundColor="blue";


//=========== Event Binding ===============//
orangeBtn.addEventListener("click", orangeBody);
greenBtn.addEventListener("click",greenBody);
blueBtn.addEventListener("click", blueBody);