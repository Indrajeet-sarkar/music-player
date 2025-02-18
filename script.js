let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours <16){
        speak("Good afternoon Sir")
    }else{
        speak("Good Evening Sir")
    }
}
// window.addEventListener('load',()=>{
//     wishMe()
// })
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition 
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
   takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    voice.style.display="block"
    btn.style.display="none"
})
function takeCommand(message){
   voice.style.display="none"
    btn.style.display="flex"
    if(message.includes("hello")||message.includes("hey")||message.includes("hi")){
        speak("hello sir,how can i help you?")
    }
    else if(message.includes("who are you")){
        speak("i am virtual assistant ,created by indrajeet Sir")
    }
    
    else if(message.includes("aap ka naam kya hai")){
        speak("mera naam victor hai")
    }
    else if(message.includes("what is your name")){
        speak("My name is victor")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://youtube.com/","_blank")
    }

    else if(message.includes("youtube kholo")){
        speak("youtube khul rha hai...")
        window.open("https://youtube.com/","_blank")
    }

    else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://google.com/","_blank")
    }

    else if(message.includes("google kholiye")){
        speak("google khul rha hai")
        window.open("https://google.com/","_blank")
    }

    else if(message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://facebook.com/","_blank")
    }

    else if(message.includes("facebook kholiye")){
        speak("facebook khul rha hai")
        window.open("https://facebook.com/","_blank")
    }

    else if(message.includes("open instagram")){
        speak("opening instagram...")
        window.open("https://instagram.com/","_blank")
    }

    else if(message.includes("instagram kholiye")){
        speak("instagram khul rha hai")
        window.open("https://instagram.com/","_blank")
    }

    else if(message.includes("open calculator")){
        speak("opening calculator..")
        window.open("calculator://")
    }

    else if(message.includes("calculator kholiye")){
        speak("calculator khul rha hai")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp..")
        window.open("whatsapp://")
    }

    else if(message.includes("whatsapp kholiye")){
        speak("whatsapp khul rha hai")
        window.open("whatsapp://")
    }
    
    else if(message.includes("time")){
      let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
      speak(time)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
      } else if(message.includes("open spotify")){
        speak("opening spotify..")
        window.open("spotify://")
       
      }
    else{
        let finalText="this is what i found on internet regarding" + message.replace("shipra","") || message.replace("shifra","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("shipra","")}`,"_blank")
    }
}