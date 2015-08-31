$( document ).ready(function() {

  console.log("TTT JS loaded");

// Intro animation

  $('g#gameBoard').velocity(
    { translateY: 20,
      opacity: 0.5}, {
        duration: 500
      });

  $('h1').velocity({
    translateY: 20,
    opacity: 0.5}, {
        duration: 500
      }
  );

  $('g#gameBoard').velocity(
    { translateY: 0,
      opacity: 1}, {
        duration: 500
      });

  $('h1').velocity(
    { translateY: 0,
      opacity: 1}, {
        duration: 500
      }
  );

  var game = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];

  var winner = ""
  var player = ""

  var playerMove = 0;

  // Function to update the game board and track pieces in array & on screen.

  function updateArrayBoard(){

    // On click - find out the player and return the relevant icon

    $( "rect" ).click(function(event) {

      var boxClickedIDToString = (event.currentTarget.id).toString();
      var pos = boxClickedIDToString.replace('r','').split('c');

      if(playerMove % 2 == 0 && game[pos[0]][pos[1]] == null) {
        $('g#xPiece-'+event.currentTarget.id).velocity(
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
              strokeWidth: 10
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


//Function to determine winner

  function victoryChecking(){

    if (playerMove % 2 == 0) {
      player = "X "
    } else {
      player = "O "
    }

    //Function to clear board/stop players from continuing

    function stopGame (){
      $("<p>"+player+"Wins! Refresh to play again.</p>").appendTo("#endGameMsg");
      $('g#pieces').velocity(
        {
          opacity: 0
        });
      $('div#overlay').show("slow");
      $('h1').fadeTo("slow", 0);
      $('g#gameBoard').velocity(
        {opacity: 0}, 1250);
    }


    //Defines all possible combinations for victory

    //O Win Possibilities

    if(game[0][0] == 0 && game[0][1] == 0 && game[0][2] == 0){
      stopGame();
    } else if (game[1][0] == 0 && game[1][1] == 0 && game[1][2] == 0) {
      stopGame();
    } else if (game[2][0] == 0 && game[2][1] == 0 && game[2][2] == 0) {
      stopGame();
    } else if (game[0][0] == 0 && game[1][0] == 0 && game[2][0] == 0) {
      stopGame();
    } else if (game[0][1] == 0 && game[1][1] == 0 && game[2][1] == 0){
      stopGame();
    } else if (game[0][2] == 0 && game[1][2] == 0 && game[2][2] == 0){
      stopGame();
    } else if (game[0][0] == 0 && game[1][1] == 0 && game[2][2] == 0){
      stopGame();
    } else if (game[0][2] == 0 && game[1][1] == 0 && game[2][0] == 0){
      stopGame();
    }

    // X Win Possibilities
    else if(game[0][0] == 1 && game[0][1] == 1 && game[0][2] == 1){
      stopGame();
    } else if (game[1][0] == 1 && game[1][1] == 1 && game[1][2] == 1) {
     stopGame();
   } else if (game[2][0] == 1 && game[2][1] == 1 && game[2][2] == 1) {
     stopGame();
   } else if (game[0][0] == 1 && game[1][0] == 1 && game[2][0] == 1) {
     stopGame();
   } else if (game[0][1] == 1 && game[1][1] == 1 && game[2][1] == 1){
     stopGame();
   } else if (game[0][2] == 1 && game[1][2] == 1 && game[2][2] == 1){
     stopGame();
   } else if (game[0][0] == 1 && game[1][1] == 1 && game[2][2] == 1){
     stopGame();
   } else if (game[0][2] == 1 && game[1][1] == 1 && game[2][0] == 1){
     stopGame();
   }

   // Stalemate...

   else if(game[0][0] != null && game[0][1] != null && game[0][2] != null
          && game[1][0] != null && game[1][1] != null && game[1][2] != null
          && game[2][0] != null && game[2][1] != null && game[2][2] != null
   ) {

     $("<p>Stalemate...refresh to play again.</p>").appendTo("#overlay");
     $('g#pieces').velocity(
       {
         opacity: 0
       });
     $('div#overlay').show("slow");
     $('h1').fadeTo("slow", 0);
     $('g#gameBoard').velocity(
       {opacity: 0}, 1250);
    }
  }
});
