//*******LOGIC LAYER*******\\
'use strict'
// debugger
function Game() {
  this.numberToGuess
  this.initializeGame()
}

Game.prototype.initializeGame = function() {
  this.numberToGuess = Math.floor((Math.random() * 100) + 1)
  console.log(this.numberToGuess)
}

Game.prototype.evaluateHotness = function(guess) {
  guess = parseInt(guess)
  var howCloseWasThisGuess = Math.abs(this.numberToGuess - guess)
  console.log('Number to Guess: ' + this.numberToGuess)
  console.log('userGuess: ' + guess)
  console.log('howClose?: ' + howCloseWasThisGuess)

  switch (guess) {
    case (howCloseWasThisGuess <= 10 && howCloseWasThisGuess >= 1):
      console.log('Scorching HOT!')
      break
    case (howCloseWasThisGuess <= 20 && howCloseWasThisGuess > 10):
      console.log('Hot')
      break
    case (howCloseWasThisGuess <= 30 && howCloseWasThisGuess > 20):
      console.log('Warm')
      break
    case (howCloseWasThisGuess <= 50 && howCloseWasThisGuess > 30):
      console.log('Cold')
      break
    case (howCloseWasThisGuess <= 100 && howCloseWasThisGuess > 50):
      console.log('ICE COLD!')
      break
    case howCloseWasThisGuess > 100:
      console.log('Too Boku. Pick between 1 and 100.')
      break
    default:
      console.log('Start New Game.')
      break
  }
}
Game.prototype.takeGuess = function(guess) {
  this.evaluateHotness(guess)
}
window.Game = Game
