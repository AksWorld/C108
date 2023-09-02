var bark=0;
var meow=0;
var roar=0;
var background_noise=0;

function Identify(){
 document.getElementById("Activation").style.background="lightgreen";
 navigator.mediaDevices.getUserMedia({audio:true});
 classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Ajm7ZJQ-O/model.json",modelLoaded) ; 
}

function modelLoaded(){
   classifier.classify(resultFound);
}

function resultFound(error,result){
    if(error){
     console.error(error);
    }
    else{
        console.log(result);
        color_r=Math.floor(Math.random()*255)+1;
        color_g=Math.floor(Math.random()*255)+1;
        color_b=Math.floor(Math.random()*255)+1;
        document.getElementById("Animal_Name").innerHTML=result[0].label;
        document.getElementById("Animal_Count").innerHTML='Accuracy-'+
        (result[0].confidence*100).toFixed(2)+"%";
        document.getElementById("Animal_Name").style.color="rgb("
        +color_r+","+color_r+","+color_r+");";
    
       
            
        if(result[0].label=="Dog"){
            console.log("insidedog");
        document.getElementById("img").src="Dog.jpeg";
        }
        else if(result[0].label=="Cat"){
            console.log("insidecat");
        document.getElementById("img").src="Cat.png";
        }
        else if(result[0].label=="Cow"){
            console.log("insidecow");
        document.getElementById("img").src="Cow.jpeg";
        }
        else if(result[0].label=="Lion"){
            console.log("insidelion");
        document.getElementById("img").src="Lion.png";
      }

    }
}
