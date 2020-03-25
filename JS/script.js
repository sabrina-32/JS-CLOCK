const  secondHand = document.querySelector('.second-hand');
const  minHand = document.querySelector('.min-hand');
const  hourHand = document.querySelector('.hour-hand');


function setData(){
const  now = new Date();

///hand  of second

const  seconds =  now.getSeconds();
const  secondsDegrees = ((seconds/60)*360)+90;
secondHand.style.transform = `rotate(${secondsDegrees}deg)`;


/// hand  of  minutes
const  mins = now.getMinutes();
const minsDegree = ((mins/60)*360)+90;   
minHand.style.transform = `rotate(${minsDegree}deg)`;

///hand  of  hour

const  hour = now.getMinutes();
const hoursDegree = ((mins/12)*360)+90;   
hourHand.style.transform = `rotate(${hoursDegree}deg)`;



}

setInterval(setData,1000);

