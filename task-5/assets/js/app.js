let cl = console.log;

const formInfo = document.getElementById("formInfo");
const strValue = document.getElementById("strValue");
const turnicateBtn = document.getElementById("turnicateBtn");

const showTurnicate = (eve) => {
    // cl("trigger");
    // let str = strValue.value;
    // cl(str);
    // let turnicate = str.slice(3,-3)
    // alert(turnicate);
    let turnicate = truncateString(strValue.value)
    // cl(turnicate);
    alert(turnicate);
    formInfo.reset();
}

function truncateString(str) {
        if (str.length >= 7) {
          return str.slice(3, -3);
        } else {
          return alert("Please enter valid data");
        }
      }
    
turnicateBtn.addEventListener("click", showTurnicate);











//let string = "Hello JavaScript and ESMA-6"
// function truncateString(str, num) {
//     if (str.length > num) {
//       return str.slice(0, num) + "...";
//     } else {
//       return str;
//     }
//   }

//   let result = truncateString(string, 3);
//   cl(result);