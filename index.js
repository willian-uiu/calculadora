function calc(){
    document.getElementById("soma").onclick = function(){
        let num1 = document.getElementById("num1").value;
        let num2 = document.getElementById("num2").value;
    
        let result = parseFloat(num1) + parseFloat(num2);
        
        document.getElementById("result").value = result;
    }

    document.getElementById("subtracao").onclick = function(){
        let num1 = document.getElementById("num1").value;
        let num2 = document.getElementById("num2").value;
    
        let result = parseFloat(num1) - parseFloat(num2);
        
        document.getElementById("result").value = result;
    }

    document.getElementById("multiply").onclick = function(){
        let num1 = document.getElementById("num1").value;
        let num2 = document.getElementById("num2").value;
    
        let result = parseFloat(num1) * parseFloat(num2);
        
        document.getElementById("result").value = result;
    }

    document.getElementById("divide").onclick = function(){
        let num1 = document.getElementById("num1").value;
        let num2 = document.getElementById("num2").value;
    
        let result = parseFloat(num1) / parseFloat(num2);
        
        document.getElementById("result").value = result;
    }
}