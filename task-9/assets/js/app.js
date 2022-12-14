let cl = console.log;

const formInfo = document.getElementById("formInfo");
const date1 = document.getElementById("date1");
const date2 = document.getElementById("date2");
const calDaysBtn = document.getElementById("calDaysBtn");

const calDaysInDates = (eve) => {
    // let date = date1.value;
    // cl(date);;
    let fdate1 = new Date(date1.value).getTime();
    // cl(fdate1);
    let sdate2 = new Date(date2.value).getTime();
    // cl(sdate2);
    if(fdate1 < sdate2){
        alert((sdate2 - fdate1)/(1000*60*60*24));
        // cl(nDate);
    }else{
        alert((fdate1-sdate2)/(1000*60*60*24));
    }

    formInfo.reset();
}
calDaysBtn.addEventListener("click", calDaysInDates);

let date = new Date();
cl(date);

let year = date.getFullYear();
cl(year);

let month =date.getMonth();
cl(month);

let day = date.getDay();
cl(day);

let hour = date.getHours();
cl(hour);

let min = date.getMinutes();
cl(min);

let sec = date.getSeconds();
cl(sec);

let getMiliSec = date.getMilliseconds();
cl(getMiliSec);

let getTime = date.getTime();
cl(getTime); 