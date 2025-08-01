

const speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector('select');

const button = document.querySelector("button");

const icon =document.querySelector('i');

let isSpeaking =false;


window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    speech.voice= voices[0];
    voices.forEach((voice, i) =>{
        voiceSelect.options[i] = new Option(voice.name, i)
    })
    voiceSelect.addEventListener('change', ()=>{
        speech.voice = voices[voiceSelect.value]
    })
}

button.addEventListener('click', ()=>{
   if(window.speechSynthesis.speaking){
    window.speechSynthesis.cancel();
    icon.className = 'ri-play-large-fill';
    isSpeaking = false;

   }else{
    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);
    icon.className ='ri-pause-large-fill';
    isSpeaking = true;
   }

})

speech.onend = () =>{
    icon.className = 'ri-play-large-fill';
    isSpeaking= false;
}