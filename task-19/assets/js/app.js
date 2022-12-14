let cl = console.log;
//============  DOM Selection  =============//
let decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const para = document.getElementById("para");
//============  Function Expression  =============//
const onClickMinus = (event) => {
let decreaseBtn = document.getElementById("decreaseBtn");
    para.style.fontSize = "";

}
const onClickPlus = (event) => {

}

//============  Event Binding  =============//
decreaseBtn.addEventListener("click", onClickMinus);
increaseBtn.addEventListener("click",  onClickPlus);
