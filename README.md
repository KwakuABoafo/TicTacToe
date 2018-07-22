# TicTacToe

This project uses the p5.js library and functions that are from the p5.js library 
This game uses the last index of the turns array to decide who goes and after that it pops (deletes) the last index and goes to the new last index 
the slots array is used to store all the moves so that it can be checked if someone has won the game or not, it is also gonna be used to see if someone has already placed their piece in a slot 
the setup function creates a 600 by 600 canvas on screen
the O function just draws the O (using the p5.js text(); , textSize(); , and textAlign(); functions)
the X function just draws the X (using the p5.js text(); , textSize(); , and textAlign(); functions)
the mouseClicked method just places the piece where the player clicks and doesn't place a piece if the slot has already been taken 
the draw function draws the Tic Tac Toe board using a bunch of lines (Which I have defined using the p5.js line function)  
the winConditions function (as the name implies) holds all the possible win conditions for a tic tac toe game and shows the win screen
the keyPressed function is going to take in the enter key and restart the game when somebody wins and the win screen is has appeared(currently in progress)
