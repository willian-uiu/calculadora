function calc(op){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    let result = 0;

    switch (op){
        case "+": result = num1 + num2; break;
        case "-": result = num1 - num2; break;
        case "*": result = num1 * num2; break;
        case "/": result = num1 / num2; break;
    }
    document.getElementById("result").value = result;
    
    
    let operacao =  "<p>"+ num1 + op + num2 + "=" + result + "</p>";
    let history = document.getElementById("history");
    history.innerHTML = operacao + history.innerHTML;

    if(history.children.length > 10){
        history.removeChild(history.childNodes[10]);
    }
}