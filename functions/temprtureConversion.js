function degC () { 
    console.log("Enter the number to convert into degC between freezing point 32-212"); 
        farhenheit = 120;
        if (farhenheit > 32 && farhenheit < 212){
            degree = (farhenheit - 32 ) * 5 / 9;
            console.log(+farhenheit+"degF = "+degree+"degC");
        }
        else
            console.log("The value is not in range"); 
        }
        
    function degF () {
        console.log("Enter the number to convert into degF between freezing point 0-100");
            degree = 50;
            if (degree > 0 && degree < 100){
                farhenheit = (degree * 9 / 5 ) + 32;
                console.log(+degree+"degC = "+farhenheit+"degF");
            } 
            else 
                console.log("The value is not in range"); 
        } 
    
        let farhenheit = 0;
        let degree = 0;
        console.log("To convert value into degF enter 0 to convert into degC enter 1") ;
        let input = 0;
        switch(input){
            case 0:
                degF();
                break;
            case 1:
                degC();
                break;
        }