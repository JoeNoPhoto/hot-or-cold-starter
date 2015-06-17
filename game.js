'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Game = (function () {
  function Game() {
    _classCallCheck(this, Game);

    this.$guessList = document.getElementById('guessList');
    this.$guess = document.getElementById('guess');
    this.$guessButton = document.getElementsByClassName('guessButton');
    this.$userGuess = document.getElementById('userGuess');
    this.$guessCount = document.getElementById('count');
    this.$newGame = document.getElementById('new');
    this.$overlay = document.getElementById('overlay');
    this.startNewGame();
  }

  _createClass(Game, [{
    key: 'startNewGame',
    value: function startNewGame() {
      this.totalGuessList = [];
      this.numberToGuess = this.generateNumber();
    }
  }, {
    key: 'generateNumber',
    value: function generateNumber() {
      return Math.floor(Math.random() * 100 + 1);
    }
  }, {
    key: 'addNewGuess',
    value: function addNewGuess() {
      var currentGuess = this.$userGuess.value;
      if (currentGuess) {
        var currentTemp = Math.abs(this.numberToGuess - currentGuess);
        this.$guess.innerText = currentGuess + ' ' + this.guessTemperature(currentTemp);
        this.totalGuessList.push(currentGuess);
        this.$guessCount.textContent = this.totalGuessList.length;
        this.$userGuess.value = '';
      }
    }
  }, {
    key: 'guessTemperature',
    value: function guessTemperature(abs) {
      switch (true) {
        case abs > 100:
          return 'is TOOBOKU.' + '\n' + 'Pick a number between 1 and 100';
        case abs > 50:
          return 'is ICECOLD';
        case abs > 30:
          return 'is COLD';
        case abs > 20:
          return 'is WARM';
        case abs > 10:
          return 'is HOT';
        case abs >= 1:
          return 'is On FIYAH!!!';
        case abs === 0:
          return 'is Dead On! You NAILED IT!!!' + '\n' + 'Press \'+NEW GAME to Play Again\'';
        default:
          return 'isn\'t a number.' + '\n' + 'Try again...' + '\n' + '...with a number.';
      }
    }
  }]);

  return Game;
})();

var game = new Game();
game.startNewGame();

/*--- Display information modal box ---*/
$('.what').click(function () {
  $('.overlay').fadeIn(1000);
});

/*--- Hide information modal box ---*/
$('a.close').click(function () {
  $('.overlay').fadeOut(1000);
});

/*--- Take Guess Input ---*/
$('#guessButton').click(function (evt) {
  evt.preventDefault();
  game.addNewGuess();
});

/*--- Start New Game ---*/
$('.new').click(function () {
  $('.game').fadeOut(1000);
  game.startNewGame();
  $('.game').fadeIn(1000);
});