function myops(){
    num1 = Number(prompt("Please enter number 1"));
    num2 = Number(prompt("Please enter number 2"));
    ops = prompt("Enter the operation");

    if (ops == "+") {
        return num1 + " + " + num2 + " = " + num1+num2;
    }
    else if(ops == "-"){
        return num1 + " - " + num2 + " = " + num1-num2;
    }
    else if(ops == "*"){
        return num1 + " * " + num2 + " = " + num1*num2;
    }
    else if(ops == "/"){
        return num1 + " / " + num2 + " = " + num1/num2;
    }
    else {
        return "Error";
    }
}
console.log(myops());