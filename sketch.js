var splashimg
var playbutton,aboutbutton,musicbutton,mutebutton

function preload(){
splashimg=loadImage("splash.gif")

}

function setup(){
    createCanvas(windowWidth,windowHeight)

    musicbutton=createImg("buttons1-main/sound.png")
    musicbutton.position(width/4,height-(height/4.25))
    musicbutton.size(300,200)


playbutton=createImg("buttons1-main/play.png")
playbutton.position(width/2,height-(height/4.25))
playbutton.size(2701,210)

mutebutton=createImg("buttons1-main/mute.png")
mutebutton.position(width-(width/4),height-(height/4.25))
mutebutton.size(265,190)


}

function draw(){
background(splashimg)
    
}