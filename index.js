const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

//canvas sizing
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//resize functionallity
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

//variables
let audio = new Audio('click.wav');
let drawing = false;
let brush_width = 1;
let brush_color = 'white';

function smallBrush(){
    audio.play();
    brush_width = 1;
}
function mediumBrush(){
    audio.play();
    brush_width = 10;
}
function bigBrush(){
    audio.play();
    brush_width = 50;
}

function white(){
    audio.play();
    brush_color = "white";
}
function red(){
    audio.play();
    brush_color = '#F47174';
}
function green(){
    audio.play();
    brush_color = '#bfe3b4';
}
function blue(){
    audio.play();
    brush_color = '#93CAED';
}

function erase(){
    audio.play();
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

function startdrawing(e){
    drawing = true;
    draw(e);
}

function stopdrawing(){
    drawing = false;
    ctx.beginPath();
}

function draw(e){
    if(!drawing) return;

    ctx.lineWidth = brush_width;
    ctx.lineCap = "round";

    ctx.strokeStyle = brush_color;
    ctx.lineTo((e.clientX - (window.innerWidth/12)),e.clientY)
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo((e.clientX - (window.innerWidth/12)),e.clientY);
}

//event listener
canvas.addEventListener("mousedown", startdrawing);
canvas.addEventListener("mouseup", stopdrawing);
canvas.addEventListener("mousemove", draw);