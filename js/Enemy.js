class Enemy {
    update(timeDiff){
        this.y = this.y + timeDiff * this.speed
        this.domElement.style.top = this.y + "px"
        if (this.y > GAME_HEIGHT){
            this.root.removeChild(this.domElement)
            this.destroyed = true
        }
    }
    constructor(theRoot, enemySpot){
        this.root = theRoot
        this.spot = enemySpot
        this.x = enemySpot * ENEMY_WIDTH
        this.y = -ENEMY_HEIGHT
        this.enemyNumber = Math.floor(Math.random() * 48)
        this.domElement = document.createElement("img")
        this.domElement.src = "images/enemy"+ this.enemyNumber + ".png"
        this.domElement.style.position = "absolute"
        this.domElement.style.left = this.x +"px"
        this.domElement.style.width = ENEMY_WIDTH + "px"
        this.domElement.style.height = ENEMY_HEIGHT + "px"
        this.domElement.style.top = this.y +"px"
        this.domElement.style.zIndex = 5
        theRoot.appendChild(this.domElement)
        this.speed = Math.random()/2 +0.2
    }
}

// }
//  TEST PRIME NUMBER
// function test_prime(n)
// {

//   if (n===1)
//   {
//     return false;
//   }
//   else if(n === 2)
//   {
//     return true;
//   }else
//   {
//     for(var x = 2; x < n; x++)
//     {
//       if(n % x === 0)
//       {
//         return false;
//       }
//     }
//     return true;  
//   }
// }


