$( document ).ready(function() {

console.log("TTT JS loaded");


var game = [
  [0, null, null],
  [0, null, null],
  [0, null, null]
];




// Function to update the array

  function updateArrayBoard(){

    var playerMove = 0;

// <rect id="box-r1c1"

    var r1c1SquareArray = game[0][0];
    var r1c2SquareArray = game[0][1];
    var r1c3SquareArray = game[0][2];

    var r2c1SquareArray = game[1][0];
    var r2c2SquareArray = game[1][1];
    var r2c3SquareArray = game[1][2];

    var r3c1SquareArray = game[2][0];
    var r3c2SquareArray = game[2][1];
    var r3c3SquareArray = game[2][2];

//create a playerMove counter, so that in each turn
//it counts the moves in the game, divides, so that you can
//tell by the remainder, if odd or even, and thus, if
//the player is an x or an o

// on click...

$( "rect" ).click(function( event ) {
  console.log( event.currentTarget.id); // true
  var boxClickedOnID = event.currentTarget.id

  if(boxClickedOnID == "box-r1c1") {
    game[0][0] = 1;
      $('g#xPiece-r1c1').velocity(
      {
        opacity: 1
      });
  } else if(boxClickedOnID == "box-r1c2") {
    game[0][1] = 1;
      $('g#xPiece-r1c2').velocity(
      {
        opacity: 1
      });
  }

  playerMove += 1
  console.log(playerMove);
  console.log(game[0][0]);
  console.log(game[0][1]);

});

    // console.log(game[0][1]);

  }

updateArrayBoard();



// Function get icons to appear


var firstIcon = $('#xPiece-r1c1');

// $('rect#box-r1c1').click(function(){
//   $('g#xPiece-r1c1').velocity(
//   {
//     opacity: 1
//   });
// });

console.log(game);

});
