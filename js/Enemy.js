class Enemy {
    update(timeDiff){
        // this.x = this.x + (timeDiff * this.speed) * this.direction
        this.y = this.y + timeDiff * this.speed
        this.domElement.style.top = this.y + "px"
        this.domElement.style.left = this.x + "px"
        if (this.y+50 > GAME_HEIGHT){
            this.root.removeChild(this.domElement)
            this.destroyed = true
        }
        if (this.x > GAME_WIDTH) {
            this.root.removeChild(this.domElement)
            this.destroyed = true
        }
        // if (this.x + ENEMY_WIDTH > GAME_WIDTH || this.x <0){
        //     this.direction *=-1
        // }
    }
    constructor(theRoot, enemySpot){
        this.root = theRoot
        this.spot = enemySpot
        this.x = enemySpot * ENEMY_WIDTH
        this.y = -ENEMY_HEIGHT
        this.enemyNumber = Math.floor(Math.random() * 50 + 1)
        this.domElement = document.createElement("img")
        this.domElement.src = "images/enemy"+ this.enemyNumber + ".png"
        // this.domElement.style.outline = " 1px solid red"
        this.domElement.style.position = "absolute"
        this.domElement.style.left = this.x +"px"
        this.domElement.style.width = ENEMY_WIDTH + "px"
        this.domElement.style.height = ENEMY_HEIGHT + "px"
        this.domElement.style.top = this.y +"px"
        this.domElement.style.zIndex = 5
        theRoot.appendChild(this.domElement)
        this.speed = Math.random()/2 + 0.23
        // this.direction = Math.random() < 0.5 ? -1:1
    }
}