// import './player.js'
let player
let ball
let block = []
const canvas = {
    tag:document.querySelector('canvas'),
    width:document.querySelector('canvas').width,
    height:document.querySelector('canvas').width,
    ctx:document.querySelector('canvas').getContext('2d')
}
const game = { 
    status: true,
    time: 0,
    startIn: 1000
}
// LOAD PLAYER
$.getScript('./oop/player.js', ()=>{
    player = new Player([140,20],[canvas.height-20,canvas.width/2-140/2],'red')
})
$.getScript('./oop/ball.js', ()=>{
    ball = new Ball(20,'blue')
})
$.getScript('./oop/block.js', ()=>{
    let tmp
    let tmpY = 0,tmpX = 0
    for(let i=0;i<canvas.width/25-1;i++){
        tmp = new Block(50,'black',[tmpX*50,tmpY*50], i)
        tmpX++
        block.push(tmp)
        console.log(i)
    }
})
// REPAINT 
function repaint(){
    canvas.ctx.clearRect(0,0,canvas.width,canvas.height)
}
window.onkeypress = (e)=>{
    switch(e.keyCode){
        case 97: // A
            player.setPosition(player.position[1]-=player.speed)
        break;
        case 100: // D
            player.setPosition(player.position[1]+=player.speed)
        break;
    }
}
setTimeout(()=>{
    let interval = setInterval(()=>{
        if(block.length == 0){
            game.status = false
        }
        if(!game.status){
            clearInterval(interval)
            return
        }
        repaint()
        for(let i=0;i<block.length;i++){
            block[i].draw()
            block[i].collision()
        }
        player.draw()
        ball.movement()
    },1)
},game.startIn)

