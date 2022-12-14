let cl = console.log;
const numInput = document.getElementById("num");
const showBtn = document.getElementById("showBtn");

function outerFunction (eve){
let num = true
let result = "";
  if(numInput.value >= num){
    for(let i=+(numInput.value)+1; i<= +(numInput.value)+5; i++){
      result += `${i}, `
    }
  }else{
        alert("please enetr valid data")
  }
        alert(result)
  
}
  showBtn.addEventListener("click", outerFunction)