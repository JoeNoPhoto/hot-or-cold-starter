! function() {
  class Game {
    constructor() {
      this.totalGuesses = []
      this.numberToGuess = this.generateNumber()
      this.$guessList = document.getElementById('guessList')
      this.$guessButton = document.getElementsByClassName('#guessButton')
      this.$userGuess = document.getElementsByClassName('#userGuess')
      this.$guessCount = document.getElementsByClassName('#count')
      this.$newGame = document.getElementById('.new')
      this.$overlay = document.getElementById('.overlay')
    }

    startNewGame() {
      var newGame = new Game()
      return newGame
    }
    generateNumber() {
      return Math.floor((Math.random() * 100) + 1)
    }

    getGuessFromDOM() {
    }

    createGuessListNode(guess) {
      this.currentGuess = guess
      this.currentTemp = Math.abs(this.numberToGuess - this.currentGuess)
      this.listChild = document.createElement('li')
      this.$guessList.appendChild(this.listChild).innerHTML = this.currentGuess + " " + this.guessTemperature(this.currentTemp) + '<br>'
      console.log('numberToGuess: ' + this.numberToGuess)
      console.log('currentGuess: ' + this.currentGuess)
      console.log('currentTemp: ' + this.currentTemp)
    }
    guessTemperature(abs) {
      switch (true) {
        case (abs > 100):
          return 'is TOOBOKU'
        case (abs > 50):
          return 'is ICECOLD'
        case (abs > 30):
          return 'is COLD'
        case (abs > 20):
          return 'is WARM'
        case (abs > 10):
          return 'is HOT'
        case (abs >= 1):
          return 'is On FIYAH!!!'
        case (abs === 0):
          return 'is Dead On! You NAILED IT!!!'
      }
    }



  }


    var game = new Game()
    game.startNewGame()
    game.createGuessListNode(45)

/*--- Display information modal box ---*/
    $(".what").click(function(){
    	$(".overlay").fadeIn(1000);

    	});

/*--- Hide information modal box ---*/
    $("a.close").click(function(){
    		$(".overlay").fadeOut(1000);
    	});

/*--- Start New Game ---*/
    $('.new').click(function() {
        $('.game').fadeOut(1000)
          game.startNewGame()
        $('.game').fadeIn(1000)
      })
}()
