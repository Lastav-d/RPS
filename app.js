let choices = document.querySelectorAll(".choice");
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");
let result = document.querySelector(".msg");


choices.forEach(choice  => {
    choice.addEventListener("click", () =>{
      const userChoice = choice.querySelector("img").alt.toLowerCase();
      const compChoice = computerChoice();
      const winner = determineWinner(userChoice,compChoice);

    console.log("User Choice:", userChoice);
    console.log("Computer Choice:", compChoice);
    console.log("Winner:", winner);


      if(winner === "user" ){
        userScore.textContent = parseInt(userScore.textContent)+1;
        result.innerText = `You chose ${userChoice} and Computer chose ${compChoice}.You Win!`;
        result.style.backgroundColor = "green";
      }else if(winner === "computer"){
        compScore.textContent = parseInt(compScore.textContent)+1;
        result.innerText = `You chose ${userChoice} and Computer chose ${compChoice}.You lose!`;
        result.style.backgroundColor = "red"; 
      }else{
        result.innerText = `Both Chose ${userChoice}, Its Draw`;
      }
    })
});

//math.random se computer choice nikala 

const computerChoice = () => {
    const options = ["rock", "paper","scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice){
       return "draw";
    }else if(
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") || 
        (userChoice === "scissors" && computerChoice==="paper")
        ){
            return "user";
        } else {
            return "computer";
        }
};


