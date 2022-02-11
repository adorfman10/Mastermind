# Feedback Challenge

For this challenge, we're giving you a fake project submission from a fictional learner and we'd like you to provide written feedback on it.

You can assume that the project does not pass, so you don't need to assign a specific grade to the submission. Instead what we really want to see is how you provide coaching both around missed requirements as well as opportunities to better adopt best practices.

The code written by our fictional learner can be found in the provided `app.js` and `functions.js` files, and we've provided a modified version of the prompt they would have received below.

## Installing and Running the Project

This project is a JavaScript-based version of the game [Mastermind](https://en.wikipedia.org/wiki/Mastermind_(board_game)) and is played entirely in the terminal.

1. Download the repo and then open it in your terminal.
2. Run `npm install` to install all dependencies.
3. Run `npm run start` to run the application, which will be played entirely in your terminal.
4. Use `control + c` to close the application when needed.

## Project Prompt: Mastermind

This week, you will implement a simple text-based game.

In this game, the computer will generate a 3-digit number where each digit is unique and the player must then guess the number. For each guess, the computer informs the player if:
- there are correct digits that are in the correct position (1**8**3 compared with 7**8**9)
- there are correct digits that are in the *incorrect* position (56**7** compared with **7**89)
- or no correct digits are present in the guess (345 compared with 789)

If the player guesses the exact number, they are informed that they win and the game ends.

### Project-Specific Acceptance Criteria

* As a developer, I want the `createSolution()` function to return an **array** of 3 elements, where each element is a random digit from 0 to 9, so that the game can generate a solution for the player.
* As a player, I want each digit in the solution to be unique (for example, the solution cannot be 111 or 388), so the hints are as useful as possible.
* As a developer, I want `app.js` to loop, prompting the player for a single 3-digit number (not each digit individually), then call the `checkGuess()` function and print out the result, so the player can guess solutions and be told how close they are. 
* As a developer, I want the loop to exit if the `checkGuess()` function returns an array with just the item "WINNER", so that the game may end.
* As a developer, I want the `checkGuess()` function to return an **array** of messages that conform to the game logic described below, so that the player's input can be compared to the solution.

| Situation | Hint |
| --------- | ---- |
| A digit in the guess matches a digit in the solution in the same position | GREEN |
| A digit in the guess matches a digit in the solution but in a different position | YELLOW |
| No digits in the guess match digits in the solution | RED |
| The guess exactly matches the solution | WINNER |

Examples:

| Solution | Guess | Hint |
| -------- | ----- | ----- |
| 184 | 293 | ["RED"] |
| 184 | 123 | ["GREEN"] |
| 184 | 124 | ["GREEN", "GREEN"] |
| 184 | 146 | ["GREEN", "YELLOW"] |
| 184 | 841 | ["YELLOW", "YELLOW", "YELLOW"] |
| 184 | 184 | ["WINNER"] |

**NOTE:** While "GREEN" and "YELLOW" can appear multiple times in a single output, based on number of relevant digits, "RED" only appears a single time for an *entirely* incorrect guess. In other words ["RED", "RED", "RED"] or ["GREEN", "RED", "YELLOW"] are not valid responses.

## General Acceptance Criteria

* Code is DRY.
* Indentation, brackets, bracing, spacing, and casing are consistent.
* Code is commented sufficiently to provide clarity where needed.
* Variables and functions are named clearly and descriptively.
* Magic numbers and other fragile patterns are avoided.
