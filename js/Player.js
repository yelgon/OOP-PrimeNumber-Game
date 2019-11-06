class Player {
    constructor(root){
        this.x = 2 * PLAYER_WIDTH
        let y = GAME_HEIGHT - PLAYER_HEIGHT - 10
        this.domElement = document.createElement("img")
        this.domElement.src = "images/player.png"
        this.domElement.style.position = "absolute"
        this.domElement.style.left = this.x + "px"
        this.domElement.style.width = PLAYER_WIDTH + "px"
        this.domElement.style.height = PLAYER_HEIGHT + "px"
        this.domElement.style.top = y + "px"
        this.domElement.style.zIndex = "10"
        root.appendChild(this.domElement)
    }
    moveLeft(){
        if(this.x>0) {
            this.x = this.x - PLAYER_WIDTH
        }
        this.domElement.style.left = this.x + "px"
    }
    moveRight(){
        if(this.x + PLAYER_WIDTH < GAME_WIDTH){
            this.x = this.x + PLAYER_WIDTH
        }
        this.domElement.style.left = this.x + "px"
    }
}