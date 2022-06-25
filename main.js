function setup()
{
    video=createCapture(VIDEO);
    video.size(400,400);

    canvas=createCanvas(400,400);
    canvas.position(500,200);
     
     poseNet=ml5.poseNet(video,modelLoaded);
     poseNet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log("model is loaded");
}
function gotPoses(results)
{
if(results.length>0)
{
    console.log(results);
}
}