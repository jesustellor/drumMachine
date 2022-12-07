import { useEffect } from 'react';
import './App.css';

function App() {
  
let handleButton = (event) => {
  var x = event.key;
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

let handleClick = (event) => {
  let value = event.target.innerText;
  console.log(event);
    if(value === 'Q'){
      let audio = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3");
      audio.play();
    }else if(value === 'W'){
      let audioW = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3");
      audioW.play()
    }else if(value === 'E'){
      let audioW = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3");
      audioW.play()
    }else if(value === 'A'){
      let audioW = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3");
      audioW.play()
    }else if(value === 'S'){
      let audioW = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3");
      audioW.play()
    }else if(value === 'D'){
      let audioW = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3");
      audioW.play()
    }else if(value === 'Z'){
      let audioW = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3");
      audioW.play()
    }else if(value === 'X'){
      let audioW = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3");
      audioW.play()
    }else if(value === 'C'){
      let audioW = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3");
      audioW.play()
    }  
}

let handleSwitch = () => {
  let switched = document.getElementById('switch');
  if(switched.checked){
    handleButton();
    console.log("Switch is on");
  }else if(!switched.checked){
    handleClick()
    console.log("Switch is Off");
  }
}

useEffect(() => {
  window.addEventListener('keydown', handleButton);
  // return cleanup funtion to remove the handler after use
  return () => {
      window.removeEventListener('keydown', handleButton);
  } 
}, []);


  return (
    <div className="App">
      <header className="App-header">
          <button onClick={handleSwitch}>Q</button>
          <button onClick={handleSwitch}>W</button>
          <button onClick={handleSwitch}>E</button>
          <button onClick={handleSwitch}>A</button>
          <button onClick={handleSwitch}>S</button>
          <button onClick={handleSwitch}>D</button>
          <button onClick={handleSwitch}>Z</button>
          <button onClick={handleSwitch}>X</button>
          <button onClick={handleSwitch}>C</button>

          <label className="switch">
            <input id='switch' onClick={handleSwitch} type="checkbox"/>
              <span className="slider round"></span>
          </label>




      </header>
    </div>
  );
}

export default App;
