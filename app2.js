const btn = document.querySelector('talk');
const content = document.querySelector('.content');
const google = "https://www.google.com/search?q=";
console.log("ansh");


var d = new Date();
var m = d.getMinutes();
var h = d.getHours()
var t = h + ":" + m ;
var form
if (h >= 12) {
     
       form = "PM"
            }

            if (h < 12) {
     
                form = "AM"
                     }



const recongnition = new ( window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();

recongnition.onstart = function () {
    console.log('voice is activated , you can speech ');
};
const greeting = ['good thanks' ,  'doing coding stuff' , 'leave me alone'];
const weather =  ['sunny ', 'rainy', 'humid'];
//add the listner to btn
 function a()  
 {
    
        $(".image").addClass("mystyle");
      
recongnition.start();


}

//const text1 = message.includes('how are you');

recongnition.onresult = function(event) {
    console.log('You said: ', event.results[0][0].transcript);
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    $(".image").removeClass("mystyle");

   // content.textContent = transcript;
    readOutLout(transcript);
};
function readOutLout(message){
    const speech = new SpeechSynthesisUtterance();
if(message.includes('how are you')){
   const finaltext = greeting[Math.floor(Math.random())];
   speech.text = finaltext;
}
       
        else if(message.includes('who made you')){
        speech.text = 'Ansh Sonkusare';
                }
                else if(message.includes('time')){
                    speech.text = t + form;
                            }
   
                
        else if(message.includes('where do you live')){
                    speech.text = 'i live on internet';
                         }
            
                         else if(message.includes('open')){
                            var txt = message.replace( /open/g , " " );
                            var txt2 = txt.trim();
                            var txt3 = "https://www."+ txt2 + ".com"
                           // console.log(txt3);
                           window.open(txt3 , "_blank")
                             speech.text = 'opening';
                         }
                         
                       
                         else if(message.includes('my location')){
                            window.open("map.html" , "_blank")
                             speech.text = 'opening';
                         }
else{
        speech.text = 'here is your result ';
        var txt = message.replace( / /g , "+" );
var final = google+txt ;
window.open(final , "_blank")
}
    


    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
   
    window.speechSynthesis.speak(speech);
}


