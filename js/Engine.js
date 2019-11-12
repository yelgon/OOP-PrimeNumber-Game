class Engine {
    gameLoop = () =>{
        if(this.lastFrame === undefined) this.lastFrame = (new Date).getTime()
        let timeDiff = (new Date).getTime() - this.lastFrame
        this.lastFrame = (new Date).getTime()
        this.enemies.forEach(enemy =>{
            enemy.update(timeDiff)
        })
        this.enemies = this.enemies.filter(enemy =>{
            return !enemy.destroyed
        })
        while(this.enemies.length < MAX_ENEMIES){
            let spot = nextEnemySpot(this.enemies)
            this.enemies.push(new Enemy(this.root, spot))   
        }
        if (this.getPrimeNumber()){
            this.heartScore++ 
            
        }
        this.score.update(this.heartScore)
        const enemy = this.isNotPrimeNumber()
        if (enemy !==undefined && !this.isPrime(enemy.enemyNumber)){
            window.alert(enemy.enemyNumber+" is not a prime number")
            return this.resetGame()
        }
        
        this.time -= Math.round(timeDiff/28)
        this.timeLimit.update(this.time)
        this.score.update(this.heartScore)
        if (this.time<0){
            this.timeLimit.update('0')
            window.alert("Time's Up")
            return this.resetGame()
        }
        if(this.heartScore>=150){
            window.alert("You Win")
            return this.resetGame()
        }
        
      
    setTimeout(this.gameLoop, 20)
    }
    resetGame =() =>{
        this.time = 1500
        this.heartScore = 0
    }
    getPrimeNumber =() =>{
        return this.enemies.some((enemy)=>
            this.isPrime(enemy.enemyNumber) &&
            enemy.x === this.player.x &&
            // enemy.x === this.player.x  &&
            // enemy.x <= this.player.x + PLAYER_WIDTH -35 &&
            enemy.y + ENEMY_HEIGHT -35 >= this.player.y  &&
            enemy.y <= this.player.y + PLAYER_HEIGHT   
        )
    }
    isNotPrimeNumber =() =>{
        return this.enemies.find((enemy)=>   
            enemy.x === this.player.x &&
            // enemy.x + ENEMY_WIDTH >= this.player.x -35 &&
            // enemy.x <= this.player.x + PLAYER_WIDTH -35 &&
            enemy.y + ENEMY_HEIGHT-35  >= this.player.y &&
            enemy.y <= this.player.y + PLAYER_HEIGHT     
        )
    }
    isPrime(num){
        for(let i = 2; i<num; i++)
            if(num%i === 0) return false
        return num>1
    }
    constructor(theRoot) {
        this.root = theRoot
        this.player = new Player(this.root)
        this.time = 1500
        this.timeLimit = new Text(this.root, "10px", "50px")
        this.timeLimitText = new Text(this.root, "10px", "10px")
        this.timeLimitText.update("TIME LIMIT")
        this.heartScore = 0
        this.score = new Score(this.root, GAME_WIDTH+20+"px", "50px")
        this.scoreGoal = new Score(this.root, GAME_WIDTH+20+"px", "10px")
        this.scoreGoal.update("GOAL = 150")
        this.enemies = []
        
        addBackground(this.root)
    }
}

