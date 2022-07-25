noseX=0;
noseY=0;

function preload() {
    lipstick = loadImage('https://i.postimg.cc/4djgYyTJ/lipstick.png');
}
function setup() {
    canvas = createCanvas(960, 720);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(960, 720);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
     image(video, 0, 50, 960, 720);
    image(lipstick, noseX-50, noseY + 110, 120, 60)
}

function take_snapshot() {
    save('student_name.png');
}

function modelLoaded() {
    console.log("posenet initialized");
}

function gotPoses(results) {
    if(results.length>0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = "+ noseX);
        console.log("nose y = "+ noseY);
    }
}
