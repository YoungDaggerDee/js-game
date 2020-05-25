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
$.getScript('./player.js', ()=>{
    player = new Player([140,20],[canvas.height-20,canvas.width/2-140/2],'red')
})
$.getScript('./ball.js', ()=>{
    ball = new Ball(20,'blue')
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
        repaint()
        player.draw()
        ball.draw()
    },1)
},game.startIn)

