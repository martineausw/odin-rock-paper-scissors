# Odin Rock-Paper-Scissors

## Description 

This barebones project assigned by the The Odin Project curriculum exercises basic JavaScript problem-solving for the browser. It takes in text input from the user and checks it against a randomly selected computer choice in five rounds of rock-paper-scissors via console.

The lessons culminated in the project recommends a problem-solving approach consisting roughly of:
  1. Plan
  2. Pseudocode
  3. Divide and conquer

These steps translate to engaging with the problem to break it down into sub-problems, outlining an approach, and executing on preparation


## Plan

### Overview

1. Generate a random number interpreted "rock", "paper", and "scissors" options
2. Get case-insensitive text input from users: "rock", "paper" or "scissors"
3. Compare choices to determine winner of a round then increment score, do nothing in event of a tie
4. Loop for five rounds and report winner, if any

### Sub-problems 

- Get computer choice:
  - Generate a random number \[0, 1\)
  - Map random number to three valid options:
    1. Extend random number range to \[0, 3\)
    2. Floor random number such that:
      - 0 as rock
      - 1 as paper
      - 2 as scissors
- Get user choice:
  - Get text input from user:
    1. Accept "rock", "paper", or "scissors"
    2. Transform to lowercase
    3. Convert text input to number:
      - 0 as rock
      - 1 as paper
      - 2 as scissors
- Play round:
  - Get computer choice
  - Get user choice
  - When user choice is 0 (rock):
    - When computer choice is 0 (rock), award no points
    - When computer choice is 1 (paper), award point to computer
    - When computer choice is 2 (scissors), award point to player
  - When user choice is 1 (paper):
    - When computer choice is 0 (rock), award point to player
    - When computer choice is 1 (paper), award no points
    - When computer choice is 2 (scissors), award point to computer
  - When user choice is 2 (scissors):
    - When computer choice is 0 (rock), award point to computer
    - When computer choice is 1 (paper), award point to player
    - When computer choice is 2 (scissors), award no points

### Observations

With the current structure of the round and choice system, when the computer choice and player choice are the same, no points are awarded. Round winner determination can be reduced into a mathematical expression: 

Let `player1` and `player2` be integers, such that [0, 2] where 0 is rock, 1 is paper, 2 is scissors

For a game, let both `player1` and `player2` be selected at random, such that the winner is determined by the following:
- 0 beats 2
- 1 beats 0
- 2 beats 1

With respect to a single player, say `player1`, there are three outcomes:
- Tie, when `player1` selects the same option as `player2`
- Loss:
  - when `player1` selects 0 (rock), `player2` selects 1 (paper)
  - when `player1` selects 1 (paper), `player2` selects 2 (scissors)
  - when `player1` selects 2 (scissors), `player2` selects 0 (rock)
- Win:
  - when `player1` selects 0 (rock), `player2` selects 2 (scissors)
  - when `player1` selects 1 (paper), `player2` selects 0 (rock)
  - when `player1` selects 2 (scissors), `player2` selects 1 (paper)

Alternatively, we can express these outcomes as:
- Tie, when `player1 == player2`
- Loss, when `player1 == (player2 + 1) % 3`
- Win, when `player1 == (player2 + 2) % 3`

## Pseudocode

```Pseudocode
getPlayerChoice
  prompt for text input then store in inputString
  transform inputString to lower-case
  check if inputString is:
    "rock", return 0
    "paper", return 1
    "scissors", return 2
    otherwise restart function

getComputerChoice
  get random number then store in computerChoice
  floor computerChoice
  return computerChoice

playRound(playerChoice, computerChoice)
  if playerChoice == computerChoice
    return 0
  else if playerChoice == (computerChoice + 1) % 3
    return -1
  else if playerChoice == (computerChoice + 2) % 3
    return 1

playGame
  let score = 0

  for i where i is \[0, 5\)
    score += playRound(getPlayerChoice, getComputerChoice)

  if score == 0
    print "It';w
    "It's a tie!"
  if score > 0
    print "You win!"
  if score < 0
    print "You lose!"
```
