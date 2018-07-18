let slots = ["" , "" , "" , "" , "" , "" , "" , "" , ""];
let turns = [1 ,2 ,3 ,4 ,5, 6 ,7 ,8, 9];
function setup(){
    createCanvas(600 , 600); 
}

function draw(){
    //vertical lines
    // line(x1 , y1 , x2 , y2); 
    line(200, 0 , 200 , 600);
    line(400 , 0 , 400 , 600);

    //horizontal lines 
    line(0 , 200 , 600 , 200);
    line(0 , 400 , 600 , 400); 

    // if X wins by going through the first row 
    if(slots[0] == "X" && slots[1] == "X" && slots[2] == "X"){
        line(0 , 125 , 600 , 125);
        W();
        I();
        N();
    }
    
}

function X(xLoc ,yLoc){
    textSize(150);
    textAlign(CENTER);
    text("X" , xLoc, yLoc)
}
function O(oLoc1 , oLoc2){
    textSize(150);
    textAlign(CENTER);
    text("O" , oLoc1, oLoc2)
}
function W(){
    textSize(150);
    textAlign(CENTER);
    text("W" , 100, 325)
}
function I(){
    textSize(150);
    textAlign(CENTER);
    text("I" , 300 , 325)
}
function N(){
    textSize(150);
    textAlign(CENTER);
    text("N" , 500, 525)
}

function mouseClicked(){
    //box clicks
    if(mouseX > 0 && mouseX < 200 && mouseY > 0 & mouseY < 200  && Math.floor((turns[turns.length - 1] % 2)) != 0  ){
        slots[0] = "X";
        turns.pop();
        X(100 , 125);
    }
    if(mouseX > 0 && mouseX < 200 && mouseY > 0 & mouseY < 200  && Math.floor((turns[turns.length - 1] % 2)) == 1  ){
        slots[0] = "O";
        turns.pop();
        O(100 , 125);
    }
    // doesn't work yet but should 
    if(mouseX > 200 && mouseX < 400 && mouseY > 0 & mouseY < 200  && Math.floor((turns[turns.length - 1] % 2)) != 0 ){
        slots[1] = "X";
        turns.pop();
        X(300 , 125);
    }
    if(mouseX > 200 && mouseX < 400 && mouseY > 0 & mouseY < 200  && Math.floor((turns[turns.length - 1] % 2)) == 1 ){
        slots[1] = "O";
        turns.pop();
        O(300 , 125);
    }
}