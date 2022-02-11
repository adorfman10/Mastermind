function createSolution() {
  
  var array = [];
  var a = Math.floor(Math.random()*10);
  var b = Math.floor(Math.random()*10);
  var c = Math.floor(Math.random()*10);

  while (b === a){
    b = Math.floor(Math.random()*10);
  }

  while (c === b){
    c = Math.floor(Math.random()*10);
  }

  var array = [a, b, c];
  return array;   
}

function checkGuess( guess, solution ) {

  var result = [];

  // If (guess == solution) this function will return false 
  // even if they are equal:
  if (guess[0] == solution[0] && guess[1] == solution[1] && guess[2] == solution[2]) 
  {
    return "WINNER";
  }
    
  for (let i = 0; i <= 2; i++)
  {
    if ( guess[i] == solution[i] )
    {
      result.push("GREEN");
    }
    else if ( solution.includes(guess[i]) )
    {
      result.push("YELLOW");
    }
  }

  // If nothing matches, return RED 
  if ( result == [''] ) 
    result.push("RED")

  return result;
}

module.exports = {createSolution, checkGuess};
