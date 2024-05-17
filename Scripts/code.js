// let Num1 = document.getElementById("CalcButton1").innerHTML
// let operator
// let Num2 
let sum = ""


let dataEntry = document.getElementById("CalcNum")

let Multiplication = document.getElementById("CalcNumMl")

let Deletion = document.getElementById("CalcButtonDEL")

let PlusBtn = document.getElementById("CalcButtonPl") 

let MultBtn = document.getElementById("CalcButtonMl") 

let MinBtn = document.getElementById("CalcButtonMin") 

let MinDivideBtn = document.getElementById("CalcButtonDivide") 

let EqualsBtn = document.getElementById("CalcButtonEQ") 


function display(value){
    dataEntry.value += value;
   console.log(dataEntry.value);
PlusBtn.addEventListener("click", operator);
MinBtn.addEventListener("click", operator);
MinDivideBtn.addEventListener("click", operator);
MultBtn.addEventListener("click", operator);

PlusBtn.disabled = false;
MinBtn.disabled = false;
MinDivideBtn.disabled = false;
MultBtn.disabled = false;

}


   
function operator() {

    console.log(dataEntry.value)
if (isNaN(dataEntry.value) == true) {

PlusBtn.disabled = true;
MinBtn.disabled = true;
MinDivideBtn .disabled= true;
MultBtn.disabled = true;
}
// else if (isNaN(dataEntry.value) == false) {



// }



}

function DEL() {

location.reload();

}

function Equals() {




}

