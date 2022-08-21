inpute = [];

// This function clear all the values
function clearScreen() {
    inpute = [];
    document.getElementById("result").value = "";
    commabtn.disabled = false; 
    addBtn.disabled = false;
    subtractBtn.disabled = false;
    divideBtn.disabled = false;
    multiplyBtn.disabled = false;
}

const commabtn = document.getElementById('comma');
const divideBtn = document.getElementById('divide');
const subtractBtn = document.getElementById('subtract');
const addBtn = document.getElementById('add');
const multiplyBtn = document.getElementById('multiply');

// This function display values
function display(value) {

// Check if the comma is already press so you can not press it again
    switch(value){
        case '.':
        commabtn.disabled = true;
        addBtn.disabled = true;
        subtractBtn.disabled = true;
        divideBtn.disabled = true;
        multiplyBtn.disabled = true;
        break;
        default:
        commabtn.disabled = false; 
        addBtn.disabled = false;
        subtractBtn.disabled = false;
        divideBtn.disabled = false;
        multiplyBtn.disabled = false;
        break;
    }
    
    document.getElementById("result").value += value;
    inpute.push(value);
}
// This is to delete the last value if you made a mistake
function backSpace(){
    inpute.pop();
    let result= inpute.join('').toString();
    document.getElementById("result").value = result;
}

// This function evaluates the expression and returns result
function calculate() {

    let answer = inpute.join('').toString();
    let result = Function("return " + answer)();  
    document.getElementById("result").value = result;
}





