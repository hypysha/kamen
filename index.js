const buttons = document.querySelectorAll('button');
const result = document.getElementById('result');

function computerChoice() {
  const choices = ['🗿', '✂️', '📄'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function playGame(playerChoice) {
  const computer = computerChoice();
  let outcome;

  if (playerChoice === computer) {
    outcome = 'draw';
  } else if (playerChoice === '🗿' && computer === '✂️' || 
             playerChoice === '✂️' && computer === '📄' || 
             playerChoice === '📄' && computer === '🗿') {
    outcome = 'win';
  } else {
    outcome = 'today is not your day';
  }

  result.innerText = `u chose ${playerChoice}, the computer chose ${computer}. ${outcome}!`;
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    playGame(button.innerText);
  });
});
