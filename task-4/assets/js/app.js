let cl = console.log;

const formInfoControl = document.getElementById("formInfo");
const firstNum = document.getElementById("firstNum");
const secondNum = document.getElementById("secondNum");
const thirdNum = document.getElementById("thirdNum");
const showBtn = document.getElementById("showBtn");

const onClickShow = (eve) => {
    // cl("triger");
let result = highAndLow(firstNum.value, secondNum.value, thirdNum.value);
   alert(result);
   formInfoControl.reset();

}

function highAndLow(num1, num2, num3){
    return "Highest number is: " + Math.max( num1, num2, num3) + " and " + "Lowest number is: " + Math.min(num1, num2, num3);
}
showBtn.addEventListener("click", onClickShow);