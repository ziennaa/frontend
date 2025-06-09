function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}

function compute(){
    var principal = parseFloat(document.getElementById('principal').value);
    var rate = parseFloat(document.getElementById('rate').value);
    var years = parseInt(document.getElementById('years').value);
    
    if (principal <= 0 || isNaN(principal)) {
        alert("Please enter a positive number");
        document.getElementById('principal').focus();
        return;
    }

    var interest = (principal * rate * years) / 100;
    var amount = principal + interest;
    var year = new Date().getFullYear() + years;
    
    var result = document.getElementById("result");
    result.innerHTML = `If you deposit <mark>${principal}</mark>,<br>
                        at an interest rate of <mark>${rate}%</mark>,<br>
                        You will receive an amount of <mark>${amount}</mark>,<br>
                        in the year <mark>${year}</mark>`;
}

