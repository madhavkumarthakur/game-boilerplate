var splashScreen
var playbutton, musicbutton, mutebutton
var gameState = "wait"
var bglevel1, object1, object2, object3, object4
var object1img, object2img, object3img
var x1, y1, x2, y2, x3, y3, x4, y4, x5, y5,player
var score=0


function preload() {
    splashScreen = loadImage("splash.gif")
    bglevel1 = loadImage("assets/road5.jpg")
    playerimg=loadAnimation()
}

function setup() {
    createCanvas(windowWidth, windowHeight)


    x1 = Math.round(random(50, windowWidth))
    y1 = Math.round(random(50, windowHeight))

    x2 = Math.round(random(100, windowWidth - 100))
    y2 = Math.round(random(100, windowHeight - 100))

    x3 = Math.round(random(100, windowWidth - 100))
    y3 = Math.round(random(100, windowHeight - 100))

    x4 = Math.round(random(100, windowWidth - 100))
    y4 = Math.round(random(100, windowHeight - 100))

    x5 = Math.round(random(100, windowWidth - 100))
    y5 = Math.round(random(100, windowHeight - 100))



    playbutton = createImg("buttons1-main/play.png")
    playbutton.position(width / 4 + 100, height - (height / 4))
    playbutton.size(180, 150)

    musicbutton = createImg("buttons1-main/sound.png")
    musicbutton.position(width / 2, height - (height / 3.95))
    musicbutton.size(170, 150)
    // musicbutton.hide()

    mutebutton = createImg("buttons1-main/mute.png")
    mutebutton.position(width / 2, height - (height / 3.95))
    mutebutton.size(170, 150)
    mutebutton.hide()

    player=createSprite(100,height-100)

    player.visible=false
  

    // level 1 collectibles
    object1 = createSprite(x1, y1)
    object2 = createSprite(x2, y2)
    object3 = createSprite(x3, y3)
    object4 = createSprite(x4, y4)
    object5 = createSprite(x4, y4)


    object1.visible = false
    object2.visible = false
    object3.visible = false
    object4.visible = false
    object5.visible = false



    console.log(x1, y1)
    console.log(x2, y2)
    console.log(x3, y3)
    console.log(x4, y4)
    console.log(x5, y5)


}

function draw() {

    player.x=mouseX
    player.y=mouseY

    if (gameState == "wait") {
        background(splashScreen)
    }


    playbutton.mousePressed(() => {
        about()
    })


    if (gameState == "level1") {
        background(bglevel1)
        playbutton.hide()
        mutebutton.hide()
        musicbutton.hide()
        enterlevel1()
    }
    if (gameState == "level1start") {
        background(bglevel1)
        object1.visible = true
        object2.visible = true
        object3.visible = true
        object4.visible = true
        object5.visible = true
        player.visible=true
       

        setInterval(() => {
            object1.velocityX = x1
            object1.velocityY = y1

            object2.velocityX = x2
            object2.velocityY = y2

            object3.velocityX = x3
            object3.velocityY = y3

            object4.velocityX = x4
            object4.velocityY = y4

            object5.velocityX = x5
            object5.velocityY = y5



        }, 10000);
        // collecttreasurelevel1(object1,player)
        if (object1.overlapPoint(mouseX, mouseY)) {
            object1.remove();
          }


    }




    drawSprites()


    if(gameState==="level1start"){
        fill("red")
        // fontWeight(2)
        textSize(20)
        text("Score: "+score,width-100,100)
    }
}



function about() {
    swal({
        title: "HOW TO PLAY THE GAME !!!",
        text: "Complete the tasks as instructed.. \n in various hint messages",
        imageUrl: "assets/obstacle1.jpg",
        imageSize: "200x200",
        confirmButtonText: "LET THE QUEST BEGIN!!",
        confirmButtonColor: "green"
    },
        function () {
            gameState = "level1"
        }
    )


}


function enterlevel1() {
    swal({
        title: "Find the Path to Victory !!!",
        text: "For the Treasure to appear , collect 5 Items which the Robbers dropped!!",
        imageUrl: "maria-belova-.jpg",
        imageSize: "200x200",
        confirmButtonText: "ADVENTURE BEGINS!!",
        confirmButtonColor: "green"
    },
        function () {
            gameState = "level1start"
        }
    )


}

function collecttreasurelevel1(o1) {
d = dist(o1.x,o1.y,o2.x,o2.y)
console.log(d)
if(d<=50){
    o1.visible=false
    o1.remove()
    score +=1
}

}


