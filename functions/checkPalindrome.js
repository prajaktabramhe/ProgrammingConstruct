function numberPalindrome(temp){
    let sum = 0;
    let remainder =0;
    let palindrome = 0;
    while (temp > 0 ) {
        remainder = temp % 10;  
        sum = sum * 10 + remainder;
        temp = parseInt(temp / 10);
    }
    palindrome = sum;
    if (palindrome === number){
        console.log("The number is palindrome");
    }
    else{ 
        console.log("The number is not palindrome");
    }
}

let number = 121;
let temp = number;
numberPalindrome(temp);
