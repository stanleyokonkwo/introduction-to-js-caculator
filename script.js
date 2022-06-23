
input = window.prompt("enter _, +, *,/ ");
first = parseFloat(window.prompt("enter first number"));
second = parseFloat(window.prompt("enter second number"));


function caculate(){

    if (input == "-"){
        return first - second;
    }

    else if (input =="+"){
        return first + second;

    }
    else if (input =="*"){
        return first * second;
    }
    else {
        return first / second;
    }
   
};

alert(caculate());

document.write("Thank you")
