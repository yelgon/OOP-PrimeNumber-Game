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