function preload() {
    parentroom = loadImage("pRoom.jpg");
}

function setup() {
    mycanvas = createCanvas(700, 440);
    mycanvas.center();
}

function draw() {
    image(parentroom, 0, 0, 700, 440);
    fill("orange");
    text("Bed", 110, 170);
    stroke("orange");
    noFill();
    rect(90, 150, 500, 200);

}