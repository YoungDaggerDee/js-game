class Ball{
    constructor(size,color){
        this.size = size
        this.color = color
        this.position = [canvas.height/2-this.size,canvas.width/2-this.size]
        this.direction = []
        this.direction['x'] = false
        this.direction['y'] = false
        this.draw()
    }
    draw(){
        canvas.ctx.fillStyle = this.color
        canvas.ctx.beginPath();
        canvas.ctx.arc(this.position[1], this.position[0], this.size, 0, 2 * Math.PI); // Y X SIZE
        canvas.ctx.fill()
        canvas.ctx.stroke();
    }
    // GETTER && SETTER
    setSize(size){
        this.size = size
    }
    getSize(){
        return this.size
    }
    setPosition(pos1,pos2){
        this.position = [pos1,pos2]
    }
    getPosition(){
        return this.position
    }
}