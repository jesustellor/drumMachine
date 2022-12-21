

let handleButton = () => {
  let x = Event.key
    if(x === 'q'){
      let audio = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3");
      audio.play();
    }else if(x === 'w'){
      let audio = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3");
      audio.play()
    }else if(x === 'e'){   
      let audio = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3");
      audio.play()
    }else if(x === 'a'){
      let audio = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3");
      audio.play()    
    }else if(x === 's'){
      let audio = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3");
      audio.play()  
    }else if(x === 'd'){
      let audio = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3");
      audio.play()  
    }else if(x === 'z'){
      let audio = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3");
      audio.play()  
    }else if(x === 'x'){
      let audio = new Audio("https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3");
      audio.play()  
    }else if(x === 'c'){   
      let audio = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3");
      audio.play()  
    }
    console.log(x);
  
  }

  export default handleButton;

//   let firstAudios = { 
//     firstSound: ['https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3']   }

// export default firstAudios;