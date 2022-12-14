let cl = console.log;
//  ============= DOM Selection ==========//
const formId = document.getElementById("formId");
const minutes = document.getElementById("minutes");
const hours = document.getElementById("hours");
const seconds = document.getElementById("seconds");

const minBtn = document.getElementById("minBtn");
const hurBtn = document.getElementById("hurBtn");
const secBtn = document.getElementById("secBtn");

// ============== Function Expression =============//
const minToSec = (event) => {
  if(+minutes.value){
    let sec = +minutes.value * 60;
  minutes.value = sec + " sec";
  }else(
    alert("please enter proper value/s in number/s")
  )
} 

const hrToMin = (event) => {
  if(+hours.value){
    let min = +hours.value * 60;
    hours.value = min + " min";
  }else(
    alert("please enter proper value/s in number/s")
  )
} 

const secToMin = (event) => {
    // cl("trigger")
//   cl(+seconds.value * 60)
  if(+seconds.value){
    let min = +seconds.value / 60;
    seconds.value = min + " min";
  }else(
    alert("please enter proper value/s in number/s")
  )
} 
//=================  Event Binding ==============//
minBtn.addEventListener("click", minToSec);
hurBtn.addEventListener("click", hrToMin);
secBtn.addEventListener("click", secToMin);



