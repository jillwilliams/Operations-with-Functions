const myProblem = () => {
    var answ = document.getElementById("answ1").value;
    if (answ == "11x - 2") {
        return "Good Job!"
    }  else
        return "11x - 2";
};
const myCalc = () => {
    document.getElementById("demo").innerHTML = myProblem();
}

const myProblem2 = () => {
    var answ2 = document.getElementById("answ2").value;
    if (answ2 == "15x^2 + 32x - 7") {
        return "Good Job!"
    }  else
        return "15x^2 + 32x - 7";
};
const myCalc2 = () => {
    document.getElementById("demo2").innerHTML = myProblem2();
}

const myProblem3 = () => {
    var answ3 = document.getElementById("answ3").value;
    if (answ3 == "12x^2") {
        return "Good Job!"
    }  else
        return "12x^2";
};
const myCalc3 = () => {
    document.getElementById("demo3").innerHTML = myProblem3();
}

const myProblem4 = () => {
    var answ4 = document.getElementById("answ4").value;
    if (answ4 == "5x + 1") {
        return "Good Job!"
    }  else
        return "5x + 1";
};
const myCalc4 = () => {
    document.getElementById("demo4").innerHTML = myProblem4();
}
