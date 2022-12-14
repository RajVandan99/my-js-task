let cl = console.log;

//============ DOM Selection =================//
const sumBtn = document.getElementById("sumBtn");




//============ Function Expresson =================//
const sum = (event) => {
    function add(num1, num2){
        alert(num1 + num2);
    }
   return add(50,50)
}




//============ Event Binding =================//
sumBtn.addEventListener("click", sum);