function displayTitle() {
    alert('Welcome to the Rock, Paper, Scissors Game')
}

function playGame () {
    // DECLARE VARIABLES
    let userChoice
    let computerChoice

    // ASK USER TO CHOOSE
    userChoice = prompt('rock, paper or scissors?')
    // CHECK THAT THEIR CHOICE IS VALID
    if (!(userChoice === "rock" || userChoice === "paper" || userChoice === "scissors")) {
        do {
            userChoice = prompt(`"${userChoice}" is not a valid selection to play this game\n Please choose rock, paper or scissors`)
        } while (!(userChoice === "rock" || userChoice === "paper" || userChoice === "scissors"))
    }

    // CREATE COMPUTER'S CHOICE
    let number = Math.floor(Math.random() * 3);
    if (number == 0) {
        computerChoice = "rock"
    } else if (number == 1) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissors"
    }

    // DETERMINE THE WINNER
    if (userChoice === computerChoice) {
        alert (`You chose ${userChoice}\n Computer chose ${computerChoice}\n It's a tie!`)
    } else if ((userChoice === "rock" && computerChoice === "paper") || 
                (userChoice === "paper" && computerChoice === "scissors") || 
                (userChoice === "scissors" && computerChoice === "rock")) {
        alert(`You chose ${userChoice}\n Computer chose ${computerChoice}\n Computer won!`)
    } else {
        alert(`You chose ${userChoice}\n Computer chose ${computerChoice}\n You won!`)
    }
}

function main() {
    displayTitle()
    let playAgain = 'y'
    while (playAgain === 'y') {
        playGame();
        do {
            playAgain = prompt('Do you want to play again? (y or n)')
        } while (!(playAgain === 'y' || playAgain === 'n'))
    }
    alert('Thanks for playing with me!')
}
main()