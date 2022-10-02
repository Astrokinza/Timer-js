const playStop = document.getElementById('startStopButtons')
const reset = document.getElementById('resetButton');
const timer = document.querySelector('#timer');


let minutes = 00
let secondes = 00
let hour = 00


let leadingSecondes = "0"
let leadingMinutes = "0"
let leadingHour = "0"


let timerInterval = null
let timerStatus = "stopped"

// console.log(playStop,reset,timer);


function stopWatch (){
    secondes++
    if(secondes/60===1){
        secondes = 0
        minutes++
    }
    if(secondes >= 10){
        leadingSecondes = ""
    }
    else{
        leadingSecondes="0"
    }
    if(minutes >= 10){
        leadingMinutes = ""
    }
    else{
        leadingMinutes="0"
    }
    if(hour >= 10){
        leadingHour = ""
    }
    else{
        leadingHour="0"
    }
    if(minutes/60===1){
        minutes = 0
        hour++
    }
    let displayTimer = document.getElementById('timer').innerText= "0"  +hour + ":" +leadingMinutes+ minutes +":"+ leadingSecondes +secondes
}

//  window.setInterval(stopWatch,1000)
playStop.addEventListener('click', ()=>{
    if(timerStatus === "stopped"){
        timerInterval = window.setInterval(stopWatch , 1000)
        playStop.innerHTML= ` <i class="fa-solid fa-stop"></i>`;
        timerStatus = "played"
    }
    else{
        timerStatus="stopped"
        playStop.innerHTML= ` <i class="fa-solid fa-play"></i>`;
         window.clearInterval(timerInterval)

    }
})

reset.addEventListener('click' ,()=>{
    timer.innerText="00:00:00"
    window.clearInterval(timerInterval)
    secondes=0
    minutes=0
    hour=0
    if(timer.innerText="00:00:00"){
        playStop.innerHTML= ` <i class="fa-solid fa-play"></i>`;
        timerStatus="stopped"
    }
})