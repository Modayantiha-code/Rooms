function preload() {
    kidroom = loadImage("kRoom.jpg");
}

function setup() {
    mycanvas = createCanvas(700, 440);
    mycanvas.center();
}

function draw() {
    image(kidroom, 0, 0, 700, 440);
    fill("black");
    text("Guitar", 180, 170);
    stroke("black");
    noFill();
    rect(170, 150, 90, 200);

}