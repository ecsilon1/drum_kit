//Detecting button press

var x = document.querySelectorAll(".drum").length-1;
for(var y=0; y<= x; y++){
document.querySelectorAll(".drum")[y].addEventListener("click", function(){

  var songChange=this.innerHTML;
  checkSound(songChange);
  addAnimation(songChange);
});

}

document.addEventListener("keyup" , function(event){
checkSound(event.key);
addAnimation(event.key);
});


// Detects keyboard press

    function checkSound(key){
      switch(key){
        case "w":
        var tom1=new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

        case "a":
        var tom2=new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

        case "s":
        var tom3=new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

        case "d":
        var tom4=new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

        case "j":
        var snare=new Audio("sounds/snare.mp3");
        snare.play();
        break;

        case "k":
        var crash=new Audio("sounds/crash.mp3");
        crash.play();
        break;

        case "l":
        var kick=new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;

        default: return "not found";
      }
  }

  function addAnimation(currentKey){
    var added=document.querySelector("." + currentKey);
    added.classList.add("pressed");
    setTimeout(function (){
      added.classList.remove("pressed");
    },100);
  }
