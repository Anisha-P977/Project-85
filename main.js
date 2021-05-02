canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car_1_width = 120;
car_1_height = 70;
car_1_image = "car_1.jpg";
car_1_x = 10;
car_1_y = 10;

car_2_width = 120;
car_2_height = 70;
car_2_image = "car_2.jpg";
car_2_x = 10;
car_2_y = 100;

background_image = "racing_arena.jpg"

function reset() {
    car_1_x = 10;
    car_1_y = 10;

    car_2_x = 10;
    car_2_y = 100;

    uploadBackground();
    uploadcar1();

    document.getElementById('game_status').innerHTML = "";


}

function add() {
    background_imgTag = new Image(); //defining a variable with a new image
    background_imgTag.onload = uploadBackground; //setting a function, onloading this variable
    background_imgTag.src = background_image; //load image

    car1_imgTag = new Image(); //defining a variable with a new image
    car1_imgTag.onload = uploadcar1; //setting a function, onloading this variable
    car1_imgTag.src = car_1_image; //load image

    car2_imgTag = new Image(); //defining a variable with a new image
    car2_imgTag.onload = uploadcar2; //setting a function, onloading this variable
    car2_imgTag.src = car_2_image; //load image
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1_imgTag, car_1_x, car_1_y, car_1_width, car_1_height);
    ctx.drawImage(car2_imgTag, car_2_x, car_2_y, car_2_width, car_2_height);
}

function uploadcar2() {
    ctx.drawImage(car1_imgTag, car_1_x, car_1_y, car_1_width, car_1_height);
    ctx.drawImage(car2_imgTag, car_2_x, car_2_y, car_2_width, car_2_height);
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);



    if (keyPressed == '40') {
        car1down();
        console.log("car1down");
    }
    if (keyPressed == '37') {
        car1left();
        console.log("car1left");
    }
    if (keyPressed == '39') {
        car1right();
        console.log("car1right");
    }

    if (keyPressed == '38') {
        car1up();
        console.log("car1up");
    }


    if (keyPressed == '87') {
        car2down();
        console.log("car2down");
    }
    if (keyPressed == '65') {
        car2left();
        console.log("car2left");
    }
    if (keyPressed == '68') {
        car2right();
        console.log("car2right");
    }

    if (keyPressed == '83') {
        car2up();
        console.log("car2up");
    }

    if (car_1_x == 670) {
        console.log("Car 1 Won!!");
        document.getElementById('game_status').innerHTML = "Car 1 Won!!";

    }

    if (car_2_x == 670) {
        console.log("Car 2 Won!!");
        document.getElementById('game_status').innerHTML = "Car 2 Won!!";

    }
}

function car1down() {
    if (car_1_y <= 500) {
        car_1_y = car_1_y + 10;
        console.log("When Down arrow is Pressed, x= " + car_1_x + "| y = " + car_1_y);
        uploadBackground();
        uploadcar1();
    }
}

function car1up() {
    if (car_1_y >= 0) {
        car_1_y = car_1_y - 10;
        console.log("When Up arrow is Pressed, x= " + car_1_x + "| y = " + car_1_y);
        console.log("Car 1 x position:" + car_1_x);
        console.log("Car 1 y position:" + car_1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1left() {
    if (car_1_x >= 0) {
        car_1_x = car_1_x - 10;
        console.log("When Left arrow is Pressed, x= " + car_1_x + "| y = " + car_1_y);
        console.log("Car 1 x position:" + car_1_x);
        console.log("Car 1 y position:" + car_1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1right() {
    if (car_1_x <= 700) {
        car_1_x = car_1_x + 10;
        console.log("When Right arrow is Pressed, x= " + car_1_x + "| y = " + car_1_y);
        console.log("Car 1 x position:" + car_1_x);
        console.log("Car 1 y position:" + car_1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}




function car2down() {
    if (car_2_y <= 500) {
        car_2_y = car_2_y + 10;
        console.log("When w arrow is Pressed, x= " + car_2_x + "| y = " + car_2_y);
        console.log("Car 2 x position:" + car_2_x);
        console.log("Car 2 y position:" + car_2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2up() {
    if (car_2_y >= 0) {
        car_2_y = car_2_y - 10;
        console.log("When s arrow is Pressed, x= " + car_2_x + "| y = " + car_2_y);
        console.log("Car 2 x position:" + car_2_x);
        console.log("Car 2 y position:" + car_2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2left() {
    if (car_2_x >= 0) {
        car_2_x = car_2_x - 10;
        console.log("When a arrow is Pressed, x= " + car_2_x + "| y = " + car_2_y);
        console.log("Car 2 x position:" + car_2_x);
        console.log("Car 2 y position:" + car_2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2right() {
    if (car_2_x <= 700) {
        car_2_x = car_2_x + 10;
        console.log("When d arrow is Pressed, x= " + car_2_x + "| y = " + car_2_y);
        console.log("Car 2 x position:" + car_2_x);
        console.log("Car 2 y position:" + car_2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }

}