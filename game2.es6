//******* ES6 LOGIC LAYER *******\\
class Game{
  constructor(guess, numberToGuess){
    this.guess = guess
    this.numberToGuess = Math.floor((Math.random() * 100) + 1)
  }
  startNewGame(){ return new Game }

  checkGuess(guess){
    let howCloseWasGuess = Math.abs(this.numberToGuess - guess)

    switch (guess) {
      case (howCloseWasGuess <= 10 && howCloseWasGuess >= 1):
        console.log("Scorching HOT!")
        break;
        case (howCloseWasGuess <= 20 && howCloseWasGuess > 10):
          console.log("Hot")
        break;
        case (howCloseWasGuess <= 30 && howCloseWasGuess > 20):
            console.log("Warm")
            break;
        case (howCloseWasGuess <=50 && howCloseWasGuess > 30):
          console.log("Cold")
        break;
        case (howCloseWasGuess <= 100 && howCloseWasGuess > 50):
          console.log("ICE COLD!")
          break;
        case howCloseWasGuess > 100:
          console.log("Too Boku. Pick between 1 and 100 ")
        break;
      default: console.log("No Guess")
    }
  }
}

class Guess{
  constructor(guess){
    this.guess = guess
  }
}
