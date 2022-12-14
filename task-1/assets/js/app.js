let cl = console.log;

const btn = document.getElementById("btn");
const inputNum = document.getElementById("inputNum");
const myForm = document.getElementById("myForm");

const checkOddEven = () => {
    // cl(eve);
// if(inputNum.value % 2 === 0){
//     cl("Given number is even");
// }else{
//     cl("Given number is odd");
// }
inputNum.value % 2 === 0 ? alert("Given number is even") :  alert("Given number is odd");
myForm.reset();
}

btn.addEventListener("click", checkOddEven)