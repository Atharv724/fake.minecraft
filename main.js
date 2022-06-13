var canvas = new fabric.Canvas('myCanvas');
playerx = 10;
playery = 10;
blockW = 30;
blockH = 30;
player_object = "";
block_object = "";

function player_update(){
    fabric.Image.fromURL("player.png", function (Img){
       player_object = Img;
       player_object.scaleToWidth(150);
       player_object.scaleToHeight(140);
       player_object.set({top:playery, left:playerx});
       canvas.add(player_object);
    });
}

function new_image(getImage){
    fabric.Image.fromURL(getImage, function (Img){
    block_object = Img;
    block_object.scaleToWidth(blockW);
    block_object.scaleToHeight(blockH);
    block_object.set({top:playery, left:playerx});
    canvas.add(block_object);
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
console.log(keyPressed);
if(e.shiftKey ==  true && keyPressed == '80'){
    console.log("p and shift pressed together");
    blockW = blockW + 10;
    blockH = blockH + 10;
    document.getElementById("current_width").innerHTML = blockW;
    document.getElementById("current_height").innerHTML = blockH;
}
if(e.shiftKey && keyPressed == '77'){
    console.log("m and shift pressed together");
    blockW = blockW - 10;
    blockH = blockH - 10;
    document.getElementById("current_width").innerHTML = blockW;
    document.getElementById("current_height").innerHTML = blockH;

}

if(keyPressed =='38'){
    up();
    console.log("up");
}
if(keyPressed =='40'){
    down();
    console.log("down");
}
if(keyPressed =='37'){
    left();
    console.log("left");
}
if(keyPressed =='39'){
    right();
    console.log("right");
}

if(keyPressed =='87'){
    new_image('wall.jpg');
    console.log("w");
}
if(keyPressed =='71'){
    new_image('ground.png');
    console.log("g");
}
if(keyPressed =='76'){
    new_image('light_green.png');
    console.log("l");
}
if(keyPressed =='84'){
    new_image('trunk.jpg');
    console.log("t");
}
if(keyPressed =='82'){
    new_image('roof.jpg');
    console.log("r");
}
if(keyPressed =='89'){
    new_image('yellow_wall.png');
    console.log("y");
}
if(keyPressed =='68'){
    new_image('dark_green.png');
    console.log("d");
}
if(keyPressed =='85'){
    new_image('unique.png');
    console.log("u");
}
if(keyPressed =='67'){
    new_image('cloud.jpg');
    console.log("c");
}
}


function up(){
    if(playery >= 0){
        playery = playery - blockH;
        console.log("when up is pressed player X = " + playerx + " and player Y = " + playery);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if(playery <= 330){
        playery = playery + blockH;
        console.log("when up is pressed player X = " + playerx + " and player Y = " + playery);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if(playerx >= 0){
        playerx = playerx - blockW;
        console.log("when up is pressed player X = " + playerx + " and player Y = " + playery);
        canvas.remove(player_object);
        player_update();
}
}

function right(){
    if(playerx <= 850){
        playerx = playerx + blockW;
        console.log("when up is pressed player X = " + playerx + " and player Y = " + playery);
        canvas.remove(player_object);
        player_update();
    }
}