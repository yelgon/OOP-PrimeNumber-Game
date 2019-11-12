let gameEngine = new Engine(document.getElementById("app"))
class Start {
    constructor(root){
        this.domElemnt = document.createElement("button")
        this.domElemnt.type= "button"
        this.domElemnt.style.position = "absolute"
        this.domElemnt.style.width = "255px"
        this.domElemnt.style.height = "100px"
        this.domElemnt.style.backgroundImage = "url('images/start.png')"
        this.domElemnt.style.backgroundSize = "cover"
        this.domElemnt.style.backgroundPosition = "center"
        this.domElemnt.style.left = GAME_WIDTH + 20 +"px"
        this.domElemnt.style.top = GAME_HEIGHT -100 + "px"
        this.domElemnt.style.zIndex = 20000
        root.appendChild(this.domElemnt)
    }   
}

let gameStart = new Start(document.getElementById("start"))
let start = document.querySelector('#start')
start.addEventListener("click", gameEngine.gameLoop)

let keydownHandler = event =>{
    if (event.code === "ArrowLeft"){
        gameEngine.player.moveLeft()
    }
    if (event.code === "ArrowRight") {
        gameEngine.player.moveRight()
    }
    if (event.code === "ArrowUp") {
        gameEngine.player.moveUp()
    }
    if (event.code === "ArrowDown") {
        gameEngine.player.moveDown()
    }
}
document.addEventListener("keydown", keydownHandler)
 // gameEngine.gameLoop()


