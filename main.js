function calc(){
    
    var firstNum = parseInt(document.querySelector("#value1").value);
    var secondNum = parseInt(document.querySelector("#value2").value);
    var operator = document.querySelector("#operator").value;
    var calculate;

    if (operator == "add"){
        calculate = firstNum + secondNum;
    } else if (operator == "min"){
        calculate = firstNum - secondNum;
    } else if (operator == "div"){
        calculate = firstNum / secondNum;
    } else if (operator == "mul"){
        calculate = firstNum * secondNum;
    }

    //console.log(calculate);

    document.querySelector("#result").innerHTML = calculate;
}
