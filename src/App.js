import { useEffect } from 'react';
import './App.css';

function App() {
let handleButton = (event) => {
  var x = event.key;
  if(x === 'q'){
    let audio = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3");
    audio.play();
  }else if(x === 'w'){
    let audioW = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3");
    audioW.play()

  }
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
          <button id='buttonQ' onClick={handleClick}>Q</button>
          <button id='buttonW' onClick={handleClick}>W</button>

      </header>
    </div>
  );
}

export default App;
