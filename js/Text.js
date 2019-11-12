class Text {
    constructor (root, xPos, yPos){
        let div = document.createElement("div")
        div.style.position = "absolute"
        div.style.left = xPos
        div.style.top = yPos
        div.style.color = "white"
        div.style.font = "bold 30px impact"
        div.style.zIndex = 2000
        root.appendChild(div)
        this.domElement = div
        
    }
    update(txt){
        this.domElement.innerText = txt
    }
}
class Score {
    constructor (root, xPos, yPos){
        let score = document.createElement("div")
        score.style.position = "absolute"
        score.style.left = xPos
        score.style.top = yPos
        score.style.color = "red"
        score.style.font = "bold 30px impact"
        score.style.zIndex = 2000
        root.appendChild(score)
        this.domElement = score
    }
    update(txt){
        this.domElement.innerText = txt
    }
}