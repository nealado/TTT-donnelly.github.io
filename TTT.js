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



// on click...

$( "rect" ).click(function( event ) {
  console.log( event.currentTarget.id); // true

  var boxClickedOnID = event.currentTarget.id

  if(boxClickedOnID == "box-r1c1") {

      if (playerMove % 2 == 0) {
        game[0][0] = 1;

        $('line#xPiece-r1c1').velocity(
        {
          strokeWidth: 10
        });
      }  else {
        game[0][0] = 0;
          $('g#oPiece-r1c1').velocity(
          {
            opacity: 1
          });
        }
      }

  else if(boxClickedOnID == "box-r1c2") {

    // Count whether or not you'r an x or an O
    if (playerMove % 2 == 0) {
      $('line#xPiece-r1c2').velocity(
      {
        strokeWidth: 10
      });
      game[0][1] = 1;
    } else {
      $('g#oPiece-r1c2').velocity(
      {
        opacity: 1
      });
      game[0][1] = 0;

    }

  }   else if(boxClickedOnID == "box-r1c3") {

      // Count whether or not you'r an x or an O
      if (playerMove % 2 == 0) {
        $('line#xPiece-r1c3').velocity(
        {
          strokeWidth: 10
        });
        game[0][2] = 1;
      } else {
        $('g#oPiece-r1c3').velocity(
        {
          opacity: 1
        });
        game[0][1] = 0;

      }

    }

  playerMove += 1

  console.log(playerMove);
  console.log(game[0][0]);
  console.log(game[0][1]);
  console.log(game[0], game[1], game[2]);

  function victoryChecking(){

    //Defines all possible combinations for victory

    var xVictoryR1 = [1, 1, 1]
    if(game[0] == [1, 1, 1]) {
      alert("X wins!");
    }

  }

});



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

});
