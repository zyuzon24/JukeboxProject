class JukeBox{
    constructor(){
        this.playlist = [
            {name: "Hooked on a Feeling - Blue Swede", source: "Blue Swede - Hooked On A Feeling.mp3"},
            {name: "Never Gonna Give You Up - Rick Astley", source: "Rick Astley - Never Gonna Give You Up.mp3"},
            {name: "Every Breath You Take - The Police", source: "The Police - Every Breath You Take.mp3"}
        ];
        
        this.currentSong = 0;
    }
    
}

var audio = document.getElementById("jukebox");
var displayName = document.getElementById("currentSong");
var myJuke = new JukeBox();

document.getElementById("play").addEventListener("click", function(){
    console.log("this is play");
    if(audio.paused){
        audio.play();
    } else {
        audio.pause();
    }
});


document.getElementById("skip").addEventListener("click",  function(){
  console.log("this is skip");
 
     myJuke.currentSong = (myJuke.currentSong + 1) % myJuke.playlist.length;
     console.log(myJuke.playlist[myJuke.currentSong]);
     audio.src = myJuke.playlist[myJuke.currentSong].source;
     audio.load();
     audio.play();
    
     displayName.textContent= myJuke.playlist[myJuke.currentSong].name;
});

document.getElementById("loop").addEventListener("click",  function(){
  console.log("this is loop");
  if(audio.loop === true){
      audio.loop = false;
  } else {
      audio.loop = true;
  }

});
document.getElementById("select").addEventListener("click",  function(){
  console.log("this is select");
  var input = prompt("Enter Song Number");
  if (input < 1 || input > myJuke.playlist.length){
      alert("That number is out of range");
  }
  else{
      myJuke.currentSong = input - 1;
      audio.src = myJuke.playlist[myJuke.currentSong].source;
      audio.load();
      audio.play();
      displayName.textContent= myJuke.playlist[myJuke.currentSong].name;
  }
});

audio.onended = function(){
    if (audio.loop == false){
        myJuke.currentSong = (myJuke.currentSong + 1) % myJuke.playlist.length;
        audio.src = myJuke.playlist[myJuke.currentSong].source;
        audio.load();
        audio.play();
        displayName.textContent= myJuke.playlist[myJuke.currentSong].name;
    }
}