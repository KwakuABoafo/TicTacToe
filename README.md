# TicTacToe

This project uses the p5.js library and alot of methods that are from the p5.js library 
uses the last index of the turns array to decide who goes and after that it pops of the last index and goes to the new last index 
the slots array is going to be used to store all the moves so that it can be checked if someone has won the game or not, it is also gonna be used to see if someone has already placed their piece in a slot 
the O function just draws the O (using the p5.js text(); , textSize(); , and textAlign(); functions)
the X function just draws the X (using the p5.js text(); , textSize(); , and textAlign(); functions)
the W function just draws the O (using the p5.js text(); , textSize(); , and textAlign(); functions)
the I function just draws the X (using the p5.js text(); , textSize(); , and textAlign(); functions)
the N function just draws the X (using the p5.js text(); , textSize(); , and textAlign(); functions)
the mouseClicked method just places the piece where the player clicks and doesn't place a piece if the slot has already been taken (currently in progress)
the draw function draws the tictactoe board using a bunch of lines (Which I have defined using the p5.js line function)  and will also hold all the possible win conditions for a tic tac toe game 
