/* ----Current Issues----
1. Values reset after each guess(...unless I guess the same thing twice, then it remains and guess is incremented? WTF?!!?@#!#?STABSTABSTAB)
2. switch() is always reverting to default case.

*/


//*******PRESENTATION LAYER*******\\
var $guess = document.getElementById('userGuess')
var $count = $('#count')
var game = new Game
  /*--- Display information modal box ---*/
$('.what').click(function() {
  $('.overlay').fadeIn(1000)
})

/*--- Hide information modal box ---*/
$('a.close').click(function() {
  $('.overlay').fadeOut(1000)
})

/*--- Initialize new game ---*/
$('.new').click(function() {
  $('.game').fadeOut(1000)
  game.initializeGame()
  $('.game').fadeIn(1000)
})

/*--- Check if Guess is Correct ---*/
$('#guessButton').click(function() {
  $count.html(parseInt($count.html(), 10) + 1)
  game.takeGuess($guess.value)
}.bind($guess))
