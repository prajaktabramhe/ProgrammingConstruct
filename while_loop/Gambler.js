function gambler(){
    while (cash != 0){
        let random = Math.floor(Math.random() * 10) % 2;
            if (random % 2 === 0){
                cash += 10;
                goal = cash;
            }
            else{
                cash -= 10; 
                goal = cash; 
            }
    
            if (goal === 0){
                console.log("You Won");
                break
            }
            else if (goal === 200){
                console.log("You Lost");
                break;
            }
        }
    }
    
    let cash=100; 
    let goal=0;
    gambler();