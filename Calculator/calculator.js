// CALCULATOR

function getNumber(num){
    var result = document.getElementById("result");
    if(result.value=='0'){
        result.value=num;
    }
    else{
        result.value += num;
    }
}

function clearResult(){
    var result = document.getElementById("result");
    result.value = "0";
}
function calculateResult(){
    var result  = document.getElementById("result");
    result.value = eval(result.value);
}
function deleteResult(){
   var back = document.getElementById("result").value;
   back = back.substr(0,back.length-1);
   document.getElementById("result").value = back;
}
function sauare(){
    var squareNumber = document.getElementById("result").value;
    squareNumber = squareNumber*squareNumber;
    document.getElementById("result").value = squareNumber;
}
function inverse(){
    var inverseNumber = document.getElementById("result").value;
    inverseNumber = 1/inverseNumber;
    document.getElementById("result").value = inverseNumber;
}