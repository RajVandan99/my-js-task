let cl = console.log;

const inputNum = document.getElementById("inputNum");
const inputBtn = document.getElementById("inputBtn");


const onClick = (event) => {
    // cl("trigger");   
   if(isNaN(inputNum.value) === true){
    alert(`Please enter value in number`)
   }else if((+inputNum.value >= 50) && (+inputNum.value <= 100)){
    alert(`Value is between 50-100`)
   }else{
    alert (`Value is not between 50-100`);
   }
};
inputBtn.addEventListener("click", onClick);

