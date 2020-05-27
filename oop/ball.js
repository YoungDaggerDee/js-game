class Ball{
    constructor(size,color){
        this.size = size 
        this.color = color
        // this.position = [canvas.height/2-this.size,canvas.width/2-this.size] CENTER 
        this.position = [Math.floor(Math.random () * (canvas.width/4) ) +50,Math.floor(Math.random () * (canvas.height/4) ) +50 ]
        this.direction = []
        this.direction['x'] = Math.random() >= 0.5
        this.direction['y'] = Math.random() >= 0.5
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
    //MOVEMENT 
    movement(){
        // COLLISION

        // LEFT
        if(canvas.width-this.size == this.position[1]){
            this.direction['x'] = !this.direction['x']
        }
        // RIGHT
        if(this.position[1] == this.size){
            this.direction['x'] = !this.direction['x']
        }
        // TOP
        if(this.position[0] == this.size){
            this.direction['y'] = !this.direction['y']
        }
        if(this.position[0] == canvas.height - this.size){
            game.status = false
            return console.log('end game')
        }

        // PLAYER COLLISION
        if(this.position[1] >= player.position[1] && this.position[1] <= player.position[1]+player.size[0]){ // X -> Y
            if(canvas.height-this.position[0]-1 == player.size[1]*2){
                this.direction['y'] = !this.direction['y']
            }
        }
        
        // DIRECTION
        if(this.direction['x']){
            if(this.direction['y']){
                this.position[0]++
                this.position[1]++
            }else{
                this.position[0]--
                this.position[1]++
            }
        }else{
            if(!this.direction['y']){
                this.position[0]--
                this.position[1]--
            }else{
                this.position[0]++
                this.position[1]--
            }
        }

        this.draw()
    }
}