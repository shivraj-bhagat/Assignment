// function keyPress(e) {
//     let x = e.key;
//     let y = document.getElementById("msg");
//     if(y.value) {
//         x = y.value + x;
//     }
//     y.value = x;
//     y.innerHTML = x;
// }

// window.addEventListener('keydown', keyPress);

// function hey() {
//     let y = document.getElementById("msg");
//     y.value = "";
//     y.innerHTML = "";
// }

// function randomChar() {
//     let result           = '';
//     let characters       = 'abcdefghijklmnopqrstuvwxyz';
//     result += characters.charAt(Math.floor(Math.random() * 26));
//     console.log(result)
//     let y = document.getElementById("msg");
//     y.value = result;
//     y.innerHTML = result;
// }

// var myGamePiece;

// function startGame() {
//     myGamePiece = new component(80, 75);
//     myGameArea.start();
// }

// var myGameArea = {
//     canvas : document.createElement("canvas"),
//     start : function() {
//         this.canvas.width = window.innerWidth;
//         this.canvas.height = window.innerHeight-30;
//         this.context = this.canvas.getContext("2d");
//         document.body.insertBefore(this.canvas, document.body.childNodes[0]);
//         this.interval = setInterval(updateGameArea, 20);        
//     },
//     stop : function() {
//         clearInterval(this.interval);
//     },    
//     clear : function() {
//         this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
//     }
// }

// function component( x, y, type) {
//     console.log(type)
//     this.type = type;
//     this.x = x;
//     this.y = y;    
//     this.speedX = 0;
//     this.speedY = 0;    
//     this.gravity = 0.05;
//     this.gravitySpeed = 0;
//     this.update = function() {
//         ctx = myGameArea.context;
//         ctx.font = "30px Arial";
//         ctx.fillText("Hello World", this.x, this.y);
//     }
//     this.newPos = function() {
//         this.gravitySpeed += this.gravity;
//         this.x += this.speedX;
//         this.y += this.speedY + this.gravitySpeed;
//         this.hitBottom();
//     }
//     this.hitBottom = function() {
//         var rockbottom = myGameArea.canvas.height;
//         if (this.y > rockbottom) {
//             this.y = rockbottom;
//         }
//     }
// }

// function updateGameArea() {
//     myGameArea.clear();
//     myGamePiece.newPos();
//     myGamePiece.update();
// }

startGame()

function startGame() {
    let button = document.getElementById("startBtn");
    button.addEventListener('click', function startIt(e) {
        button.style.display = "none";
        letsPlay();
    });
}

function letsPlay() {
    let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let animations = {'a':[],'b':[],'c':[],'d':[],'e':[],'f':[],'g':[],'h':[],'i':[],'j':[],'k':[],'l':[],'m':[],'n':[],'o':[],'p':[],'q':[],'r':[],'s':[],'t':[],'u':[],'v':[],'w':[],'x':[],'y':[],'z':[]};
    let gameOn = true;
    let timeOffSet = 2000;
    let duration = 10000;
    let gameSpace = document.getElementById('gameSpace');
    let score = document.getElementById('score');
    score = parseFloat(score.textContent);
    let speed = 1;
    let SPEED_INCREMENT = 0.05;

    let audioElement = document.createElement('audio');
    audioElement.setAttribute('src', '../audio/audio.mp3');
    audioElement.autoplay = true;
    audioElement.loop=true;
    document.getElementById('gameSpace').appendChild(audioElement);

    function create() {
        let ithLetter = Math.floor(Math.random() * 26);
        let x = (Math.random() * 85) + 'vw'; // for random starting point
        let container = document.createElement('div');
        let letter = document.createElement('span');
        let letterText = document.createElement('b');
        letterText.textContent = letters[ithLetter];
        letter.appendChild(letterText);
        container.appendChild(letter);
        gameSpace.appendChild(container);
        let animation = container.animate([
            {transform: 'translate3d('+x+',-2.5vh,0)'},
            {transform: 'translate3d('+x+',87.5vh,0)'}
        ], {
            duration: duration,
            easing: 'linear',
            fill: 'both'
        });
        animations[letters[ithLetter]].splice(0,0, {animation: animation, element: container});
        speed = speed + SPEED_INCREMENT;
        animation.playbackRate = speed;

        animation.onfinish = function(e) {
            let target = container;
            let char = target.textContent;
            animations[char].pop;
            gameOver();
        }
    }

    function gameOver() {
        gameOn = false;
        getAllAnimations().forEach(function(anim) {
            anim.pause();
        });
        document.getElementById('gameOver').style.display = "inline-block";
        document.body.removeEventListener('keypress', onKeyPress);
        audioElement.remove()
    }

    function getAllAnimations() {
        if(document.getAnimations) {
            return document.getAnimations();
        } else if(document.timeline && document.timeline.getAnimations) {
            return document.timeline.getAnimations();
        }
        return [];
    }

    function onKeyPress(e) {
        let char = e.key;
        if(char.length === 1) {
            char = char.toLowerCase();
            if(animations[char] && animations[char].length) {
                let poppedLetter = animations[char].pop();
                poppedLetter.animation.pause();
                let target = poppedLetter.element.querySelector('b');
                let degs = [(Math.random() * 1000)-500, (Math.random() * 1000)-500, (Math.random() * 2000)-1000];
                target.animate([
                    {transform: 'scale(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg)',opacity:1},
                    {transform: 'scale(0) rotateX('+degs[0]+'deg) rotateY('+degs[1]+'deg) rotateZ('+degs[2]+'deg)', opacity: 0}
                ], {
                    duration: Math.random() * 500 + 850,
                    easing: 'ease-out',
                    fill: 'both'
                });
                addScore();
            }
        }
    }

    function addScore() {
        score++;
        document.getElementById("score").textContent = score;
        document.getElementById("speed").textContent = Math.floor(speed);
    }

    document.body.addEventListener('keypress', onKeyPress);

    function setupNextLetter() {
        if(gameOn) {
            create();
            setTimeout(function() {
                setupNextLetter();
            }, timeOffSet);
        }
    }
    setupNextLetter();
}