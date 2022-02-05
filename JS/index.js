for(var i=0;i<document.querySelectorAll("button").length;i++){

document.querySelectorAll("button")[i].addEventListener("click",function(){


  var buttonInnerHtml = this.innerHTML;

  switch(buttonInnerHtml) {
  case "w":
  var audio = new Audio("sounds/crash.mp3");
  audio.play();
  break;

  case "a":
  var audio = new Audio("sounds/kick-bass.mp3");
  audio.play();
  break;

  case "s":
  var audio = new Audio("sounds/snare.mp3");
  audio.play();
  break;

  case "d":
  var audio = new Audio("sounds/tom-1.mp3");
  audio.play();
  break;

  case "j":
  var audio = new Audio("sounds/tom-2.mp3");
  audio.play();
  break;

  case "k":
  var audio = new Audio("sounds/tom-3.mp3");
  audio.play();
  break;

  case "l":
  var audio = new Audio("sounds/tom-4.mp3");
  audio.play();
  break;

default:
console.log(buttonInnerHtml);

}
document.querySelector("."+buttonInnerHtml+"").classList.add("pressed");
//document.querySelector("."+buttonInnerHtml+"").classList.remove("pressed");
setTimeout(function(){
document.querySelector("."+buttonInnerHtml+"").classList.remove("pressed");},100);
});
}
document.addEventListener("keydown",function(event){
  var key = event.key;

  switch(key) {
  case "w":
  var audio = new Audio("sounds/crash.mp3");
  audio.play();
  break;

  case "a":
  var audio = new Audio("sounds/kick-bass.mp3");
  audio.play();
  break;

  case "s":
  var audio = new Audio("sounds/snare.mp3");
  audio.play();
  break;

  case "d":
  var audio = new Audio("sounds/tom-1.mp3");
  audio.play();
  break;

  case "j":
  var audio = new Audio("sounds/tom-2.mp3");
  audio.play();
  break;

  case "k":
  var audio = new Audio("sounds/tom-3.mp3");
  audio.play();
  break;

  case "l":
  var audio = new Audio("sounds/tom-4.mp3");
  audio.play();
  break;

default:
alert("key " +key+ " is pressed");
}
document.querySelector("."+key+"").classList.add("pressed");
setTimeout(function(){
document.querySelector("."+key+"").classList.remove("pressed");},100);
});
