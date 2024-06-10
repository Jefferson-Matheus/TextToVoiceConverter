const button = document.querySelector(".button-audio");
const button_ability_voices = document.querySelector(".abitlity-voices");
let select = document.querySelector("#select");
let text = document.querySelector("#text");
let voices = null;
let voice_speek = new SpeechSynthesisUtterance();
function getvoices(){
    voices = speechSynthesis.getVoices();
    if(select.childNodes.length === 0){
        for(let i = 0; i<voices.length; i++){
            let option = document.createElement("option");
            option.value = voices[i].name;
            option.text = `${voices[i].voiceURI} ${voices[i].lang}`;
            select.appendChild(option);
            button_ability_voices.style.display = "none";
            select.style.display = "inline-flex";
        }

    }
    
}
getvoices();
button_ability_voices.addEventListener("click",getvoices);

function setAtributes(){
    if(select.childNodes.length >= 1){
        voice_speek.lang = voices[select.options.selectedIndex].lang;
        voice_speek.voice = voices[select.options.selectedIndex];
    }
}
select.addEventListener("change",setAtributes);
function convertTextToVoice(){
    if(text.value != ""){
        voice_speek.text = text.value;
        window.speechSynthesis.speak(voice_speek);
    }
}
button.addEventListener("click",convertTextToVoice);