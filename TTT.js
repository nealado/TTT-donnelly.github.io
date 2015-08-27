$( document ).ready(function() {

console.log("TTT JS loaded");


var game = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];


var playerMove = 0;


// Function to update the array

  function updateArrayBoard(){


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

$( "rect" ).click(function(event) {

var boxClickedIDToString = (event.currentTarget.id).toString();
var pos = boxClickedIDToString.replace('r','').split('c');

if(playerMove % 2 == 0) {
  $('line#xPiece-'+event.currentTarget.id).velocity(
  {
    strokeWidth: 10
  });
  game[pos[0]][pos[1]] = 1;

if(game[pos[0]][pos[1]] !== null) {
  victoryChecking();
}

} else {
  game[pos[0]][pos[1]] = 0;
  $('g#oPiece-'+event.currentTarget.id).velocity(
  {
    opacity: 1
  });
  victoryChecking();

}
  playerMove += 1

  console.log(game);

});


// //
//
// $( "rect" ).click(function( event ) {
//   console.log( event.currentTarget.id); // true
//
//   var boxClickedOnID = event.currentTarget.id
//
//   if(boxClickedOnID == "box-r1c1" && game[0][0] == null) {
//
//       if (playerMove % 2 == 0) {
//         game[0][0] = 1;
//
//         $('line#xPiece-r1c1').velocity(
//         {
//           strokeWidth: 10
//         });
//       }  else {
//         game[0][0] = 0;
//           $('g#oPiece-r1c1').velocity(
//           {
//             opacity: 1
//           });
//         }
//       }
//
//   else if(boxClickedOnID == "box-r1c2" && game[0][1] == null) {
//
//     // Count whether or not you'r an x or an O
//     if (playerMove % 2 == 0) {
//       $('line#xPiece-r1c2').velocity(
//       {
//         strokeWidth: 10
//       });
//       game[0][1] = 1;
//     } else {
//       $('g#oPiece-r1c2').velocity(
//       {
//         opacity: 1
//       });
//       game[0][1] = 0;
//
//     }
//
//   }   else if(boxClickedOnID == "box-r1c3" && game[0][2] == null) {
//
//       // Count whether or not you'r an x or an O
//       if (playerMove % 2 == 0) {
//         $('line#xPiece-r1c3').velocity(
//         {
//           strokeWidth: 10
//         });
//         game[0][2] = 1;
//       } else {
//         $('g#oPiece-r1c3').velocity(
//         {
//           opacity: 1
//         });
//         game[0][1] = 0;
//
//       }
//
//     }
//
//   playerMove += 1
//
//   console.log("Number of moves played: " + playerMove);
//   console.log(game[0][0]);
//   console.log(game[0][1]);
//   console.log(game[0], game[1], game[2]);
//
//   // if(playerMove >= 5) {
//   //   victoryChecking();
//   // }
// console.log(game[0]);
// });


}

updateArrayBoard();

  function victoryChecking(){
    var winner = ""

    if (playerMove % 2 == 0) {
      winner = "X "
    } else {
      winner = "O "
    }
    //Defines all possible combinations for victory

    if(game[0][0] == 0 && game[0][1] == 0 && game[0][2] == 0){
      $("<p>"+winner+"Wins!</p>").appendTo("h1");
    } else if (game[1][0] == 0 && game[1][1] == 0 && game[1][2] == 0) {
      $("<p>"+winner+"Wins!</p>").appendTo("h1");
    } else if (game[2][0] == 0 && game[2][1] == 0 && game[2][2] == 0) {
      $("<p>"+winner+"Wins!</p>").appendTo("h1");
    } else if (game[0][0] == 0 && game[1][0] == 0 && game[2][0] == 0) {
      $("<p>"+winner+"Wins!</p>").appendTo("h1");
    } else if (game[0][1] == 0 && game[1][1] == 0 && game[2][1] == 0){
      $("<p>"+winner+"Wins!</p>").appendTo("h1");
    } else if (game[0][2] == 0 && game[1][2] == 0 && game[2][2] == 0){
      $("<p>"+winner+"Wins!</p>").appendTo("h1");
    } else if (game[0][0] == 0 && game[1][1] == 0 && game[2][2] == 0){
      $("<p>"+winner+"Wins!</p>").appendTo("h1");
    } else if (game[0][2] == 0 && game[1][1] == 0 && game[2][0] == 0){
      $("<p>"+winner+"Wins!</p>").appendTo("h1");
    }

    // X Win Possibilities
    else if(game[0][0] == 1 && game[0][1] == 1 && game[0][2] == 1){
      $("<p>"+winner+"Wins!</p>").appendTo("h1");
    } else if (game[1][0] == 1 && game[1][1] == 1 && game[1][2] == 1) {
     $("<p>"+winner+"Wins!</p>").appendTo("h1");
   } else if (game[2][0] == 1 && game[2][1] == 1 && game[2][2] == 1) {
     $("<p>"+winner+"Wins!</p>").appendTo("h1");
   } else if (game[0][0] == 1 && game[1][0] == 1 && game[2][0] == 1) {
     $("<p>"+winner+"Wins!</p>").appendTo("h1");
   } else if (game[0][1] == 1 && game[1][1] == 1 && game[2][1] == 1){
     $("<p>"+winner+"Wins!</p>").appendTo("h1");
   } else if (game[0][2] == 1 && game[1][2] == 1 && game[2][2] == 1){
     $("<p>"+winner+"Wins!</p>").appendTo("h1");
   } else if (game[0][0] == 1 && game[1][1] == 1 && game[2][2] == 1){
     $("<p>"+winner+"Wins!</p>").appendTo("h1");
   } else if (game[0][2] == 1 && game[1][1] == 1 && game[2][0] == 1){
     $("<p>"+winner+"Wins!</p>").appendTo("h1");
   }

  }

    // var xVictoryR1 = [1, 1, 1];
    //
    // for (var i=0; i<game[0].length; i++){
    //   for (var j=0; j<xVictoryR1.length; j++) {
    //     if (xVictoryR1[i] === game[0][i]) {
    //
    //     }
    //   }
    // }
    // console.log("X wins!")




// Board R1C1
//  pos = id.split(-).replace('c'. '').splict('-')
// board[pos[0]][pos[1]])=2

// Function get icons to appear


var firstIcon = $('#xPiece-r1c1');

// $('rect#box-r1c1').click(function(){
//   $('g#xPiece-r1c1').velocity(
//   {
//     opacity: 1
//   });
// });

});
