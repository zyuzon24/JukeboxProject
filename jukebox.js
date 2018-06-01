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


document.getElementById("play").addEventListener("click", function(){
  console.log("this is play");
});

document.getElementById("pause").addEventListener("click",  function(){
  console.log("this is pause");
});
document.getElementById("skip").addEventListener("click",  function(){
  console.log("this is skip");
});
document.getElementById("loop").addEventListener("click",  function(){
  console.log("this is loop");
});
document.getElementById("select").addEventListener("click",  function(){
  console.log("this is select");
});

