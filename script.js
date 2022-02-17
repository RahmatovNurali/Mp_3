
let list = [
"file:///C:/Users/User/Desktop/Javascriptda%20MUSIQA%20PLAYER%20yaratish/Musiqalar/Davae.mp3",
"file:///C:/Users/User/Desktop/Javascriptda%20MUSIQA%20PLAYER%20yaratish/Musiqalar/Qirolicham.mp3",
"file:///C:/Users/User/Desktop/Javascriptda%20MUSIQA%20PLAYER%20yaratish/Musiqalar/Remix.mp3",
"file:///C:/Users/User/Desktop/Javascriptda%20MUSIQA%20PLAYER%20yaratish/Musiqalar/Dadamni%20soyasida.mp3"


];

let currentAudioIndex = 0;

let audio = new Audio(list[0]);

let h2 = document.querySelector("h2")

function getName(){
    let soundName = list[currentAudioIndex];
    let splittedName = soundName.split("/");
    h2.innerText = splittedName[splittedName.length-1]; 
}

function playSaund(){
    audio.play();
    document.querySelector('#play').style.display="none";
    document.querySelector('#pause').style.display="block";
     getName();
}

function pauseSaund(){
    audio.pause();
    document.querySelector('#play').style.display="block";
    document.querySelector('#pause').style.display="none";
    getName();
}

function nextSaund(){
  
    ++currentAudioIndex;
    if(list[currentAudioIndex] != undefined) {
     audio.pause();
     audio = new Audio(list[currentAudioIndex]);
    audio.play();
    getName( )

    }else{
    currentAudioIndex=-1;   
     
    }
}

function prevSaund(){
--currentAudioIndex;
    if(list[currentAudioIndex]  != undefined) {
     audio.pause();
     audio = new Audio(list[currentAudioIndex]);
    audio.play();
    getName( )
    }
    else{
    currentAudioIndex=list.length;   
    }
}
