x = 0;
y = 0;
screen_width = 0;
screen_height = 0;
speak_data = "";
draw_apple = "";
to_number == "";
apple = "";

function preload (){
  loadImage("apple.png")
}

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {
to_number = Number(content);
 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
    if(Number.isInteger(to_number)){
 document.getElementById("status").innerHtml = "started drawing apple";
 draw_apple = "set";
    }else{
      document.getElementById("status").innerHTML = "The speeched has not been recognised;"
    }

}

function setup() {
 screen_width = window.innerWidth;
 screen_height = window.innerHeight;
  canvas = createCanvas(150,150);
  canvas.position(20, 140)  
}

function draw() {
  if(draw_apple == "set")
  {radius = Math.floor(Math.random() * 700);
    apple(x,y,radius);
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
