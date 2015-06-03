'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

!(function () {
  var Game = (function () {
    function Game() {
      _classCallCheck(this, Game);

      this.totalGuesses = [];
      this.numberToGuess = this.generateNumber();
      this.$guessList = document.getElementById('guessList');
      this.$guessButton = document.getElementsByClassName('#guessButton');
      this.$userGuess = document.getElementsByClassName('#userGuess');
      this.$guessCount = document.getElementsByClassName('#count');
      this.$newGame = document.getElementById('.new');
      this.$overlay = document.getElementById('.overlay');
    }

    _createClass(Game, [{
      key: 'startNewGame',
      value: function startNewGame() {
        var newGame = new Game();
        return newGame;
      }
    }, {
      key: 'generateNumber',
      value: function generateNumber() {
        return Math.floor(Math.random() * 100 + 1);
      }
    }, {
      key: 'getGuessFromDOM',
      value: function getGuessFromDOM() {}
    }, {
      key: 'createGuessListNode',
      value: function createGuessListNode(guess) {
        this.currentGuess = guess;
        this.currentTemp = Math.abs(this.numberToGuess - this.currentGuess);
        this.listChild = document.createElement('li');
        this.$guessList.appendChild(this.listChild).innerHTML = this.currentGuess + ' ' + this.guessTemperature(this.currentTemp) + '<br>';
        console.log('numberToGuess: ' + this.numberToGuess);
        console.log('currentGuess: ' + this.currentGuess);
        console.log('currentTemp: ' + this.currentTemp);
      }
    }, {
      key: 'guessTemperature',
      value: function guessTemperature(abs) {
        switch (true) {
          case abs > 100:
            return 'is TOOBOKU';
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
            return 'is Dead On! You NAILED IT!!!';
        }
      }
    }]);

    return Game;
  })();

  var game = new Game();
  game.startNewGame();
  game.createGuessListNode(45);

  /*--- Display information modal box ---*/
  $('.what').click(function () {
    $('.overlay').fadeIn(1000);
  });

  /*--- Hide information modal box ---*/
  $('a.close').click(function () {
    $('.overlay').fadeOut(1000);
  });

  /*--- Start New Game ---*/
  $('.new').click(function () {
    $('.game').fadeOut(1000);
    game.startNewGame();
    $('.game').fadeIn(1000);
  });
})();