let slots = ["" , "" , "" , "" , "" , "" , "" , "" , ""];
let turns = [1 ,2 ,3 ,4 ,5, 6 ,7 ,8, 9];
let gameMode = 0;
function setup(){
    createCanvas(600 , 600); 
}

function draw(){
    //vertical lines
    // line(x1 , y1 , x2 , y2); 
    if(gameMode == 0){
    line(200, 0 , 200 , 600);
    line(400 , 0 , 400 , 600);

    //horizontal lines 
    line(0 , 200 , 600 , 200);
    line(0 , 400 , 600 , 400); 

    console.log(turns);
    console.log(slots);

    // if X wins by going through the first row 
    winCondition(0 , 1 , 2 , "X");// across the top row for X
    winCondition(0 , 1 , 2 , "O");// across the top row for O
    winCondition(3 , 4 , 5 , "X");// across the mid row for X
    winCondition(3 , 4 , 5 , "O");// across the mid row for O
    winCondition(6 , 7 , 8 , "X");// across the bottom row for X
    winCondition(6 , 7 , 8 , "O");// across the bottom row for O
    winCondition(0 , 3 , 6 , "X");// vertically first row for X
    winCondition(0 , 3 , 6 , "O");// vertically first row for O 
    winCondition(1 , 4 , 7 , "X");// vertically second row for X
    winCondition(1 , 4 , 7 , "O");// vertically second row for O 
    winCondition(2 , 5 , 8 , "X");// vertically third row for X
    winCondition(2 , 5 , 8 , "O");// vertically third row for O 
    winCondition(0 , 4 , 8 , "X");// diagonally from left to right for X
    winCondition(0 , 4 , 8 , "O");// diagonally from left to right for O
    winCondition(2 , 4 , 6 , "X");// diagonally from right to left for X
    winCondition(2 , 4 , 6 , "O");// diagonally from right to left for O
    }
    
}

function X(xLoc ,yLoc){
    
    textSize(150);
    textAlign(CENTER);
    text("X" , xLoc, yLoc);
}
function O(oLoc1 , oLoc2){
    
    textSize(150);
    textAlign(CENTER);
    text("O" , oLoc1, oLoc2);
}

function mouseBarriers(x1 , x2, y1, y2 , index , loc1 , loc2 ){
    if(mouseX > x1 && mouseX < x2 && mouseY > y1 & mouseY < y2  && Math.floor((turns[turns.length - 1] % 2)) !=  1 && slots[index] == "" ){
        slots[index] = "O";
        O(loc1 , loc2);
        turns.pop();
    }
    if(mouseX > x1 && mouseX < x2 && mouseY > y1 & mouseY < y2  && Math.floor((turns[turns.length - 1] % 2)) !=  0  && slots[index] == ""  ){
        slots[index] = "X";
        X(loc1 , loc2);
        turns.pop();
    }
}

function mouseClicked(){
    //box clicks
    mouseBarriers(0 , 200 , 0 , 200 ,  0 , 100 , 125); //first row first box
    mouseBarriers(200 , 400 , 0 , 200 , 1, 300 , 125); // first row second box
    mouseBarriers(400 , 600 , 0 , 200 ,  2 , 500 , 125); // first row third box 
    mouseBarriers(0 , 200 , 200 , 400 , 3, 100 , 325); // second row first box
    mouseBarriers(200 , 400 , 200 , 400 , 4, 300 , 325); // second row second box
    mouseBarriers(400 , 600 , 200 , 400 , 5, 500 , 325); // second row third box
    mouseBarriers(0 , 200 , 400 , 600 , 6, 100 , 525); // third row first box
    mouseBarriers(200 , 400 , 400 , 600 , 7, 300 , 525); // third row second box
    mouseBarriers(400 , 600 , 400 , 600 , 8, 500 , 525); // third row third box
    
    
} 
function winCondition( x , y , z , letter){
    
    if(slots[x] == letter && slots[y] == letter && slots[z] == letter){
        gameMode += 1;
        background(255);
        textSize(150);
        textAlign(CENTER);
        text(letter +"'s Win" , 300 , 325);
        textAlign(CENTER);
        textSize(25);
        text("Press ENTER to replay" , 300 , 400);
    }

    // if(turns.length == 0){
    //     background(255);
    //     textSize(150);
    //     textAlign(CENTER);
    //     text("It's A Tie!!!" , 300 , 325);
    //     textAlign(CENTER);
    //     textSize(25);
    //     text("Press ENTER to replay" , 300 , 400);
    // }
}

function keyPressed(){
    if(gameMode == 1 && keyCode == ENTER ){
        gameMode = 0;
        
    }
}
