let cl = console.log;

const formInfo = document.getElementById("formInfo");
const strValue = document.getElementById("strValue");
const strCapitalize = document.getElementById("strCapitalize");

const capitalize = (eve) => {
    // cl(strValue.value);
    let string = strValue.value.toLowerCase();
    let array = string.split(" ");
    // cl(arr)
    for (var i = 0; i < array.length; i++) {
        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    }
    const str2 = array.join(" ");
    // cl(str2);
    alert(str2);  
    formInfo.reset();
}
strCapitalize.addEventListener("click", capitalize);
