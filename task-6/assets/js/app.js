let cl = console.log;

const formInfo = document.getElementById("formInfo");
const fnameControl = document.getElementById("fname")
const lnameControl = document.getElementById("lname");
const yearControl = document.getElementById("year");
const ageBtn    = document.getElementById("ageBtn");


const showAge = (eve) => {
    // cl("trigger");
    let obj = {
        fname:fnameControl.value,
        lname:lnameControl.value,
        age: getAge(),
    }
    // let date = new Date().getFullYear();
    // let oldYear = yearControl.value;
    // cl(oldYear);
    // let age = date - oldYear;
    // cl(age);
    // let age = getAge();
    alert(`Age of ${obj.fname} ${obj.lname} is ${obj.age}`);
    formInfo.reset();
}

const getAge = () => {
    return  new Date().getFullYear() - yearControl.value;
 
}

ageBtn.addEventListener("click", showAge);