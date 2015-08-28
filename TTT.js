$( document ).ready(function() {

  console.log("TTT JS loaded");

  var game = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];

  var playerMove = 0;

  // Function to update the game board and track pieces in array & on screen.

  function updateArrayBoard(){

    // On click

    $( "rect" ).click(function(event) {

      var boxClickedIDToString = (event.currentTarget.id).toString();
      var pos = boxClickedIDToString.replace('r','').split('c');

      if(playerMove % 2 == 0 && game[pos[0]][pos[1]] == null) {
        $('line#xPiece-'+event.currentTarget.id).velocity(
          {
            strokeWidth: 10
          });
        game[pos[0]][pos[1]] = 1;

        if(game[pos[0]][pos[1]] !== null) {
          victoryChecking();
        }

      } else if (playerMove % 2 != 0 && game[pos[0]][pos[1]] == null){
          game[pos[0]][pos[1]] = 0;
          $('g#oPiece-'+event.currentTarget.id).velocity(
            {
              opacity: 1
            });
          victoryChecking();
        } else {
          alert("Your turn forfeited!");
        }
        playerMove += 1

        console.log(game);
    });

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

    //O Win Possibilities

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

   // Stalemate...

   else if(game[0][0] != null && game[0][1] != null && game[0][2] != null
          && game[1][0] != null && game[1][1] != null && game[1][2] != null
          && game[2][0] != null && game[2][1] != null && game[2][2] != null
   ) {
     $("<p>Stalemate...</p>").appendTo("h1");
   }

  // console.log(game.every(isAllFilled));
  //
  // function isAllFilled(element, index, array) {
  //
  //   if (element = null) {
  //     console.log("Keep playing")
  //   } else {
  //     console.log("stop");
  //   }
  // }

  }


});

// Commented out failed code

// Board R1C1
//  pos = id.split(-).replace('c'. '').splict('-')
// board[pos[0]][pos[1]])=2

// Function get icons to appear

// Old attempt at aligning coordinates

    // var r1c1SquareArray = game[0][0];
    // var r1c2SquareArray = game[0][1];
    // var r1c3SquareArray = game[0][2];
    //
    // var r2c1SquareArray = game[1][0];
    // var r2c2SquareArray = game[1][1];
    // var r2c3SquareArray = game[1][2];
    //
    // var r3c1SquareArray = game[2][0];
    // var r3c2SquareArray = game[2][1];
    // var r3c3SquareArray = game[2][2];

// Old attempt at victory function

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
