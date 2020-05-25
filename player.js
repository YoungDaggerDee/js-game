class Player{
    constructor(size,position,color){
        this.size = size // ARRAY
        this.position = position // ARRAY
        this.color = color
        this.points = 0
        this.speed = 10
        this.draw()
    }
    draw(){
        canvas.ctx.fillStyle = this.color
        canvas.ctx.fillRect(this.position[1],this.position[0],this.size[0],this.size[1])
    }
    // GETTER && SETTER
    getPosition(){
        return this.size
    }
    getSize(){
        return this.size
    }
    setPosition(posX){
        if(this.position[1]+this.size[0] == canvas.height+player.speed){
            if(posX > 0){
                this.position[1]-=player.speed
            }
        }
        if(this.position[1]+this.size[0]+player.speed == this.size[0]){
            if(posX == -player.speed){
                this.position[1]+=player.speed
            }
        }

    }
    setSize(sizeX,sizeY){
        this.size[1] = sizeX
        this.size[0] = sizeY
        return this.size
    }
}