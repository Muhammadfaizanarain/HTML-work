

function square(_arg){

    num1 = document.querySelector("#num1").value;
    value = num1;
    result = document.querySelector("#result");

    if (num1 < 50 ) {
        myvalue = ("bad result")
        result.value = myvalue;
      
    }
      else if  ( num1 >= 50 && num1 < 70  ) {
    
       myvalue =("Good result")
       result.value = myvalue;
    }
      else if ( num1 >= 70 &&  num1 <= 100  ) {

      myvalue=("Congratulation")
      result.value = myvalue;

    }
     else  
     { 
    
            myvalue = ("output not a valid.")
            result.value = myvalue;
    }

}