// JS simulation of a rock paper scissors

const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
          return userInput;
    }
    else {
      return console.log('Invalid');
    }
  };
  
  const getComputerChoice = () => {
      const randomNumber =  Math.floor(Math.random()*3);
        switch(randomNumber){
            case 0:
            return 'rock';
            case 1:
            return 'paper';
            case 2:
            return 'sissors';
        }
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice){
      return'tie';
    }
    if (computerChoice === 'rock'){
      if (userChoice === 'paper'){
        return"you win";
      } else {
        return"computer wins";
      }
    }
    if (computerChoice === 'paper'){
      if (userChoice === 'rock'){
        return"computer wins";
      } else {
        return"you win";
      }
    }
     if (computerChoice === 'sissors'){
      if (userChoice === 'rock'){
        return"you win";
      } else {
        return"computer wins";
      }
    }
  }
  
  const playGame = () => {
    const userChoice = getUserChoice('paper');
    console.log(`Player 1 picked ${userChoice}.`);
    const computerChoice = getComputerChoice();
    console.log(`Player 2 picked ${computerChoice}.`);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();
