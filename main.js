leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
song = "";
song2 = "";
function preload(){
    song = loadSound("NeKo Music - Za Warudo.mp3");
    song2 = loadSound("Dm Dokuro - Scourge of the Universe.mp3");
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log("PoseNet is initialized!");
}
function draw() {
    image(video, 0, 0, 600, 500);
    
    fill("#FF0000");
    stroke("#FF0000");
song_variable.isPlaying(song);
song_variable.isPlaying(song2);
if (leftWristX && leftWristY > 0.2) {
    circle(leftWristX, leftWristY, 20);
    song_variable.stop(song2);
}
if(song  = false){
song.play(song);
document.getElementById("Song_Name1").innerHTML = "Song 1: NeKo Music - Za Warudo";
}

}


function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);

        rightWristX = results[0].pose.leftWrist.x;
        rightWristY = results[0].pose.leftWrist.y;
        console.log("rightWristX = " + rightWristX + " rightWristY = " + rightWristY);
    }
}