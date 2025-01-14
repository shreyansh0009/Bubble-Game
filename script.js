// creatin bubbles using javascript....
function makeBubble(){
    var bubbles = ""

    for(let i = 1; i <= 52; i++) {

        var rn = Math.floor(Math.random()*10);
        bubbles += `<div class="bubble">${rn}</div>` // used ${} to store dynamic value, and backtack `` for dynamic value.
        // if we use '' it diplays as text, that's why I use backtack `` for dynamic value
    }
document.querySelector("#bbtm").innerHTML = bubbles;
}
makeBubble();

// code for timer, it should work as stopwatch
var timer = 6
function runTimer() {
    var timerInterval = setInterval(function(){
        if(timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerInterval);
            document.querySelector("#bbtm").innerHTML = `<p id="gameover">Game Over!</p>`;
            document.querySelector("#hit").textContent = `--`
        }
    }, 1000)
}
runTimer();

// code to generate a Hit no. which you have to hit, it will be random no.
var hit = "0"
function hitGenerate(){
    hit = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent = hit;
}
hitGenerate();

// Increasing score...
var score = 0;
function addScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
} // I don't call this function manually because score should increase when hit == clicked.
// soo there comes the concept of event bubbling.....

/* 
event bubbling: same as eventListner or actionListner, kisi chiz pr click, hover ya kuch v ho to kya krna hai.

hamare pass about 70 bubbles hai to hm har ek pr eventListner nhi laga sakte, too hm uske parent div pr eventListner lagayenge taaki kisi v bubble pr chick hoo too pata chal sake hame.
*/

document.querySelector("#bbtm").addEventListener("click", function(value){
    var clickedNO = Number(value.target.textContent); 
    if(clickedNO === hit) {
        addScore();
        hitGenerate();
        makeBubble();
    }
})

// 'number': function used to convert string to number.
// 'target': get the value of target where clicked.
// 'textContent': ab to target value mil gai lekin usko sirf ek string me badalna


// now project completed but still there is a bug in it, timer khatam hone ke baad v score add ho rha hai, kaise solve kre?
// -> bubbles ko blank kr doo timer khatam hone ke baad taki click na hoo paaye..simple (runTimer function ke andar krna hai yee)
