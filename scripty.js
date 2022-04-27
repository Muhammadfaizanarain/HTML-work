function square(_arg){
    num1 = document.querySelector("#num1").value;
    num2 = document.querySelector("#num2").value;
    num3 = document.querySelector("#num3").value;
    result = document.querySelector("#result");
    value = num1 , num2 , num3;


    if ( num1 >=65 && num1 <= 100 && num2 >= 55 && num2 <= 100 && num3 >=50 && num3 <= 100) 
    {
        myvalue = ("The canidate is eligible for admision");
        result.value = myvalue;

    }
    else 
    {
        myvalue = ("The canidate is NOT eligible for admision");
        result.value = myvalue;
    }

}