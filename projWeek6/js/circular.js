let counter = document.getElementById('counter').getContext('2d');
let no = 0;
let pointToFill = 4.72;
let cw = counter.canvas.width;
let ch = counter.canvas.height;
let diff;

function fillCounter(){
    diff = ((no/100) * Math.PI*2*10);
    counter.clearRect(0,0,cw,ch); 
    counter.lineWidth = 5;
    counter.fillStyle = '#fff';
    counter.strokeStyle = '#4cd137';
    counter.textAlign = 'center';
    counter.font = '25px Noto Sans JP'; 
    counter.fillText(no+'%',100,110);
    counter.beginPath();
    counter.arc(100,100,90,pointToFill,diff/10+pointToFill);
    counter.stroke();
    if(no >= 100) {
        clearInterval(fill);
    }
    no++;
}

let fill = setInterval(fillCounter,50);