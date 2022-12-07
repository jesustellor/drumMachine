import { useEffect } from 'react';
import handleButton from './controllers/buttonAudio';
import handleClick from './controllers/clickAudio';
import './App.css';

function App() {

let handleSwitch = (event) => {
  let value = document.getElementById('switch');
  console.log(value.checked);
}

useEffect(() => {

  window.addEventListener('keydown', handleButton);
  window.addEventListener('click', handleClick);

  // return cleanup funtion to remove the handler after use
  return () => {
      window.removeEventListener('keydown', handleButton);
      window.removeEventListener('click', handleClick);

  } 
}, []);


  return (
    <div className="App">
      <header className="App-header">
          <button>Q</button>
          <button>W</button>
          <button>E</button>
          <button>A</button>
          <button>S</button>
          <button>D</button>
          <button>Z</button>
          <button>X</button>
          <button>C</button>

          <label className="switch">
            <input id='switch' onClick={handleSwitch} type="checkbox"/>
              <span className="slider round"></span>
          </label>




      </header>
    </div>
  );
}

export default App;
