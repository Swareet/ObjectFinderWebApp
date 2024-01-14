status ="";
video ="";


function setup()
{
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();
    canvas = createCanvas(400, 400);
    canvas.center();
}

function start()
{
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("Status").innerHTML = "Status : Detecting objects";
  input = document.getElementById("text").innerText;
}

function modelLoaded()
{
    status = true;
    console.log("Model Loaded!");
}

function draw()
{
    image(video, 0, 0, 400, 400);
}