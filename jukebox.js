class JukeBox{
  this.playlist = [{},{},{}];
  this.play = document.getElementById("play").addEventListener("click", play());
  this.pause = document.getElementById("pause").addEventListener("click", pause());
  this.skip = document.getElementById("skip").addEventListener("click", skip());
  this.loop = document.getElementById("loop").addEventListener("click", loop());
  this.select = document.getElementById("select").addEventListener("click", select());

  //Play()
  function play(){
          music.play();
  }
  //Pause()
  function pause(){
      music.pause()
  }
  //Skip()
  function skip(){
  }
  //Stop()
  function stop(){


  }
  //Loop()
  function loop(){
  }
}
