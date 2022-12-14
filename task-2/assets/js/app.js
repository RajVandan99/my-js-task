let cl = console.log;
const formInfo = document.getElementById("formInfo");
const calcBtn = document.getElementById("calcBtn");
const value1Control = document.getElementById("value1");
const value2Control = document.getElementById("value2");

const OnClickCalc = (eve) => {
    // cl("triger")

    let result = add(value1Control.value,value2Control.value);
    cl("Addition of " + value1Control.value + " and " + value2Control.value + " is " + result);
    let result1 = sub(value1Control.value,value2Control.value);
    cl("Substraction of " + value1Control.value + " and " + value2Control.value + " is " + result1);
    let result2 = mul(value1Control.value,value2Control.value);
    cl("Multiplication of " + value1Control.value + " and " + value2Control.value + " is " + result2);
    let result3 = div(value1Control.value,value2Control.value);
    cl("Division of " + value1Control.value + " and " + value2Control.value + " is " + result3);
    formInfo.reset();
}

const add = (num1, num2) => {
    return Number(num1) + Number(num2);
}
const sub = (num1, num2) => {
    return Number(num1) - Number(num2);
}
const mul = (num1, num2) => {
    return Number(num1) * Number(num2);
}
const div = (num1, num2) => {
    return Number(num1) / Number(num2);
}
// let result = add(10,20);
// cl(result);
calcBtn.addEventListener("click",OnClickCalc)