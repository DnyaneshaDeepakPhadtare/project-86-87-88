var canvas=new fabric.Canvas("myCanvas");

block_image_width=30;
block_image_height=30;

player_x=10;
player_y=10;

var player_object="";
var block_image_object="";

function player_update(){

    fabric.Image.fromURL("player.png",function(Img){
    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    
    player_object.set({
        top:player_y,left:player_x
    });

    canvas.add(player_object);
       });
}

function new_image(get_image){

    fabric.Image.fromURL(get_image,function(Img){
   block_image_object=Img;
    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    
    block_image_object.set({
        top:player_y,left:player_x
    });

    canvas.add(block_image_object);
       });
}


window.addEventListener("keydown",My_keydown);

function My_keydown(e){

    keypressed=e.keyCode;
    console.log(keypressed);

    if(e.shiftKey==true && keypressed=='80'){

        console.log("shift and p preesed together");
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }

    if(e.shiftKey==true && keypressed=='77'){

        console.log("shift and m preesed together");
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }

if (keypressed=='38'){
    up();
    console.log("up");
}

if (keypressed=='40'){
    down();
    console.log("down");
}

if (keypressed=='37'){
    left();
    console.log("left");
}

if (keypressed=='39'){
    right();
    console.log("right");
}

if (keypressed=='87'){
    new_image('captain_america_left_hand (1).png');
    console.log("w");
}

if (keypressed=='71'){
    new_image('hulk_face.png');
    console.log("g");
}

if (keypressed=='76'){
    new_image('hulk_left_hand.png');
    console.log("l");
}

if (keypressed=='84'){
    new_image('hulk_legs.png');
    console.log("p");
}

if (keypressed=='82'){
    new_image('hulk_right_hand.png');
    console.log("r");
}

if (keypressed=='89'){
    new_image('hulkd_body.png');
    console.log("y");
}

if (keypressed=='68'){
    new_image('ironman_body.png');
    console.log("b");
}

if (keypressed=='85'){
    new_image('ironman_face.png');
    console.log("u");
}

if (keypressed=='67'){
    new_image('ironman_left_hand.png');
    console.log("c");
}

if (keypressed=='65'){
    new_image('ironman_legs.png');
    console.log("a");
}

if (keypressed=='66'){
    new_image('ironman_right_hand.png');
    console.log("b");
}

if (keypressed=='69'){
    new_image('spiderman_body.png');
    console.log("e");
}

if (keypressed=='70'){
    new_image('spiderman_face.png');
    console.log("f");
}

if (keypressed=='71'){
    new_image('spiderman_left_hand.png');
    console.log("g");
}

if (keypressed=='72'){
    new_image('spiderman_legs.png');
    console.log("h");
}

if (keypressed=='73'){
    new_image('spiderman_right_hand.png');
    console.log("i");
}

if (keypressed=='74'){
    new_image('thor_face.png');
    console.log("j");
}

if (keypressed=='75'){
    new_image('thor_left_hand.png');
    console.log("k");
}

if (keypressed=='90'){
    new_image('thor_right_hand.png');
    console.log("z");
}
}


function up(){

    if(player_y>=0){
        player_y=player_y-block_image_height;
        console.log ("block image height="+block_image_height);
        console.log ("when up arrow key is pressed, X="+player_x+",Y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){

    if(player_y<=500){
        player_y=player_y+block_image_height;
        console.log ("block image height="+block_image_height);
        console.log ("when down arrow key is pressed, X="+player_x+",Y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){

    if(player_x>=0){
        player_x=player_x-block_image_width;
        console.log ("block image width="+block_image_width);
        console.log ("when left arrow key is pressed, X="+player_x+",Y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){

    if(player_x<=850){
        player_x=player_x+block_image_width;
        console.log ("block image width="+block_image_width);
        console.log ("when right arrow key is pressed, X="+player_x+",Y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}