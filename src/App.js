import { useState } from 'react';
// import handleClick from './controllers/clickAudio';
import './App.css';

function Square(props) {
    return(
        <button className='square'
        onClick={props.onClick}>
          {props.value}
        </button>
    )
}

function Toggle(props) {
  return(
    <label className="switch">
      <input type="checkbox" onChange={props.onChange} checked={props.checked}/>
      <span className="slider round"></span>
    </label>
  )
}

function Board(props) {
let buildSquare = (i) => {
  return(
    <Square value={props.value[i]} onClick={() => {props.onClick(i)}}/>
  )
}

let buildPower = () => {
  return(
    <Toggle onChange={() => {props.powerChange()}} checked={props.power}/>
  )
}

let buildSwitch = () => {
  return(
    <Toggle onChange={() => {props.onChange()}} checked={props.switch}/>
  )
}

  return(
    <div>
      <section>
        {buildSquare(0)}
        {buildSquare(1)}
        {buildSquare(2)}
      </section>
      <section>
        {buildSquare(3)}
        {buildSquare(4)}
        {buildSquare(5)}
      </section>
      <section>
        {buildSquare(6)}
        {buildSquare(7)}
        {buildSquare(8)}
      </section>
      {buildSwitch()}
      {buildPower()}
    </div>
  );
}

function App() {

  
  let [state, setState] = useState({
    letters: ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'],
    firstSound: ["https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
                 "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
                 "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
                 "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
                 "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
                 "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
                 "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
                 "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
                 "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
                ],
    secondSound: ["https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
                  "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
                  "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
                  "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
                  "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
                  "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
                  "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
                  "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
                  "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"],
    switchSound: true,
    powerSwitch: true,

  })


  let handleButton = (x) => {
    console.log(x);
    console.log(state.switchSound);
    console.log(state.powerSwitch);

      if(x === 0){
        if(state.powerSwitch){
          if(state.switchSound){
            let audio = new Audio(state.firstSound[x]);
            audio.play();} else {
              let audio = new Audio(state.secondSound[x]);
              audio.play();
            }
        } else {
          return
        }

      }else if(x === 1){
        if(state.powerSwitch){
          if(state.switchSound){
            let audio = new Audio(state.firstSound[x]);
            audio.play();} else {
              let audio = new Audio(state.secondSound[x]);
              audio.play();
            }
        } else {
          return
        }
      }else if(x === 2){   
        if(state.powerSwitch){
          if(state.switchSound){
            let audio = new Audio(state.firstSound[x]);
            audio.play();} else {
              let audio = new Audio(state.secondSound[x]);
              audio.play();
            }
        } else {
          return
        }
      }else if(x === 3){
        if(state.powerSwitch){
          if(state.switchSound){
            let audio = new Audio(state.firstSound[x]);
            audio.play();} else {
              let audio = new Audio(state.secondSound[x]);
              audio.play();
            }
        } else {
          return
        }
      }else if(x === 4){
        if(state.powerSwitch){
          if(state.switchSound){
            let audio = new Audio(state.firstSound[x]);
            audio.play();} else {
              let audio = new Audio(state.secondSound[x]);
              audio.play();
            }
        } else {
          return
        }
      }else if(x === 5){
        if(state.powerSwitch){
          if(state.switchSound){
            let audio = new Audio(state.firstSound[x]);
            audio.play();} else {
              let audio = new Audio(state.secondSound[x]);
              audio.play();
            }
        } else {
          return
        }
      }else if(x === 6){
        if(state.powerSwitch){
          if(state.switchSound){
            let audio = new Audio(state.firstSound[x]);
            audio.play();} else {
              let audio = new Audio(state.secondSound[x]);
              audio.play();
            }
        } else {
          return
        }
      }else if(x === 7){
        if(state.powerSwitch){
          if(state.switchSound){
            let audio = new Audio(state.firstSound[x]);
            audio.play();} else {
              let audio = new Audio(state.secondSound[x]);
              audio.play();
            }
        } else {
          return
        }
      }else if(x === 8){   
        if(state.powerSwitch){
          if(state.switchSound){
            let audio = new Audio(state.firstSound[x]);
            audio.play();} else {
              let audio = new Audio(state.secondSound[x]);
              audio.play();
            }
        } else {
          return
        }
      }  
    }

  let changeSound = () => {
    setState({...state, switchSound: !state.switchSound})
  }

  let changePower = () => {
    setState({...state, powerSwitch: !state.powerSwitch})
  }

  return(
    <Board value={state.letters} 
          onClick={i => handleButton(i)} 
          onChange={() => {changeSound()}} 
          switch={state.switchSound} 
          power={state.powerSwitch}
          powerChange={() => {changePower()}}/>
  )
}


export default App;