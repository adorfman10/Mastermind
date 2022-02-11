const prompt = require('prompt-sync')();
const {createSolution, checkGuess} = require('./functions');

const solution = createSolution();

let runGame = true;
while ( runGame ) {
  
  let guessPrompt = prompt('Guess 3 numbers. i.e. "123" or "234: " ');
  const guess = [+guessPrompt[0], +guessPrompt[1], guessPrompt[2]];
  const result = checkGuess( guess, solution );

  // display the result back to the user:
  console.log(result);

  if (result[0] == "WINNER")
    runGame = false; 
}
