function primePalindrome(integer){
    if (integer <= 1){
        flag = 1;
    }
    for (let j = 2; j < integer; j++){
        if (integer % j === 0 ){
                flag = 1;
                break;
            }
        }
    }

function primePalindrome(temp){
    let sum = 0;
    let remainder = 0;
    let palindrome = 0;
        while (temp > 0 ) {
        remainder = temp % 10;  
        sum = sum * 10 + remainder;
        temp = parseInt(temp / 10);
    }
    palindrome = sum;
    if (palindrome === integer){
        console.log("The number is prime and palindrome");
    }
    else{
        console.log("The number is prime but not palindrome");
    }
}

let flag = 0
let integer = 157;
primePalindrome(integer);
if (flag === 0){
    let temp = integer;
primePalindrome(temp)    
}
else{
    console.log("Number is not prime");
}