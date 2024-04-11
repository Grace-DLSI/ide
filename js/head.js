const div = document.querySelector('#time')
function getDate(){
    const date = new Date()
    return `欢迎访问本网站，现在是${date.getFullYear()}年${date.getMonth()+1}月${date.getDate()}日
    ${date.getHours()}时${date.getMinutes()}分${date.getSeconds()}秒`

}
div.innerHTML = getDate()
setInterval(function(){
    div.innerHTML = getDate();
},1000)
const img =document.getElementById("backg");
function getRandom(min,max){
    return Math.floor(Math.random()*(max - min + 1)+min)
}
let num = getRandom(1,2)
img.style.backgroundImage = `url(./pic/backpid000${num}.png)`
