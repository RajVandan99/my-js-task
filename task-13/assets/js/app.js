let cl = console.log;
//============= DOM Selection =====================//
const countInput = document.getElementById("count");
const increseBtn = document.getElementById("increseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
cl(+countInput.innerText)
//============= Function Expression =====================//
 const increaseNum = (event) => +countInput.innerText++;
 const decreaseNum = (event) => +countInput.innerText--;

//=============== EVENT Binding ===================//
increseBtn.addEventListener("click", increaseNum);
decreaseBtn.addEventListener("click", decreaseNum);
