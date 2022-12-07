let handleClick = (event) => {
    let value = event.target.innerText;
    console.log(event);
    if(value === 'Q'){
      let audio = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3");
      audio.play();
    }else if(value === 'W'){
      let audio = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3");
      audio.play()
    }else if(value === 'E'){   
      let audio = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3");
      audio.play()
    }else if(value === 'A'){
      let audio = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3");
      audio.play()    
    }else if(value === 'S'){
      let audio = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3");
      audio.play()  
    }else if(value === 'D'){
      let audio = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3");
      audio.play()  
    }else if(value === 'Z'){
      let audio = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3");
      audio.play()  
    }else if(value === 'X'){
      let audio = new Audio("https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3");
      audio.play()  
    }else if(value === 'C'){   
      let audio = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3");
      audio.play()  
    }
  }

  export default handleClick;