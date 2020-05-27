class Block{
    constructor(size, color , position, id){
        this.size = size // INT
        this.color = color // STRING
        this.position = position // ARRAY
        this.id = id // INT
        this.draw()
    }
    draw(){
        canvas.ctx.fillStyle = this.color
        canvas.ctx.fillRect(this.position[0],this.position[1],this.size,this.size)
    }
    destroy(){
        block.splice(0,this.id)
    }
    getPosition(){
        return this.position
    }
    collision(){
        if(this.position[0] <= ball.position[1] && this.position[0]+ball.size >=ball.position[1]){
            if(ball.position[0] < ball.size + 30){
                ball.direction['y'] = !ball.direction['y']
                this.destroy()
            }
        }
    }
}