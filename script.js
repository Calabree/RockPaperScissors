let win = false;
let computerScore=0;
let userScore=0;

let computerChoice = function computerRPS(){
    return Math.floor(Math.random() * 3);
}
let userChoice = (value) => value;
function playGame(value){
    /*KEY
    0-Rock
    1-Paper
    2-scissors
    */
    const x = computerChoice();
    switch(userChoice(value)){
        case "rock":
            if(x==0){
                window.alert("Computer picked rock! You tied this round!")
            }
            else if(x==1){
                window.alert("Computer picked paper! You lose this round!");
                computerScore++;
                document.getElementById('compScore').innerHTML = "Computer Score: " + computerScore;
            }
            else if(x==2){
                window.alert("Computer picked scissors! You win this round!");
                userScore++;
                document.getElementById('userScore').innerHTML = "Your Score" + userScore;            }
            break;
        case "paper":
            if(x==0){
                window.alert("Computer picked rock! You win this round!");
               
            }
            else if(x==1){
                window.alert("Computer picked paper! You tied this round!");
                
            }
            else if(x==2){
                window.alert("Computer picked scissors! You lose this round!");
                computerScore++;
                document.getElementById('compScore').innerHTML = "Computer Score: " + computerScore;
            }
            break;
        case "scissors":
            if(x==0){
                window.alert("Computer picked rock! You lose this round!");
                computerScore++;
                document.getElementById('compScore').innerHTML = "Computer Score: " + computerScore;
            }
            else if(x==1){
                window.alert("Computer picked paper! You win this round!");
                userScore++; 
                document.getElementById('userScore').innerHTML = "Your Score" + userScore;  
            }
            else if(x==2){
                window.alert("Computer picked scissors! You tie this round!");
            }
            break;
    }
    
    
}