// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}

const button = document.getElementById('dot');

// This function display values
function display(value) {

// Check if the comma is already press so you can not press it again
    if(value === '.' ){
        button.disabled = true;
    }else{
        button.disabled = false; 
    }

    document.getElementById("result").value += value;
}
 
// This function evaluates the expression and returns result
function calculate() {
    let inputValue = document.getElementById("result").value;
    let result = Function("return " + inputValue)();
    
    document.getElementById("result").value = result;

}




