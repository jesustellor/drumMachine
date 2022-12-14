import React, { useEffect, useState } from 'react'
import './App.css'



function Buttons(props){
  return(
    <button id={props.keyBoard} className='buttonSounds' onClick={props.onClick}>
      {props.keyBoard}
    </button>
  )
}

function Display(props){
  return(
  <div className='display'>
    <p id='displayValue'>{props.value}</p>
  </div>
  )
}

function Swiches(props) {
  return(
    <label className="switch">
      <input type="checkbox" onChange={props.onChange} checked={props.value}/>
      <span className="slider round"></span>
    </label>
  )
}

function PageVolume(props) {
  return(
      <input type='range'
             value={props.volume}
             min="0"
             max="1"
             step="0.1"
             onChange={props.onChange}
            > 
      </input>
  )
}

function Board(props) {

let createButtons = (i) => {
  return (
    <Buttons keyBoard={props.keyBoard[i]} onClick={props.clicked}/>
  )
}

let createDisplay = () => {
  return (
    <Display value={props.firstDisplay} />
  )
} 

let soundSwitch = () => {
  return(
    <Swiches value={props.soundSwitch} onChange={props.switch}/>
  )
}

let powerSwitch = () => {
  return(
    <Swiches value={props.powerSwitch} onChange={props.power}/>
  )
}

let createVolume = () => {
  return(
    <PageVolume volume={props.volume} onChange={props.volumeControl} />
  )
}

  return (
        <div id='drum-machine'>
   <section className='drum-pad'>
  <section>
  {createButtons(0)}
  {createButtons(1)}
  {createButtons(2)}
  </section>
  <section>
  {createButtons(3)}
  {createButtons(4)}
  {createButtons(5)}
  </section>
  <section>
  {createButtons(6)}
  {createButtons(7)}
  {createButtons(8)}
  </section>
  </section>
  <section className='controlls'>
  <section className='switches'>
  <div>
  {powerSwitch()}
  <p>Off / On</p>
  </div>
  <div>
  {soundSwitch()}
  <p>Switch</p>
  </div>
  </section>
  <div id='display'>
  {createDisplay()}
  </div>
  <div id='volume'>
  Volume:
  {createVolume()}
  </div>
  </section>
</div>
  )
}

export default function App() {

const [state, setState] = useState({
  keyBoard: ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'],
  firstSound: ['https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
               'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
               'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
               'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
               'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
               'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
               'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
               'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
               'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',],
  firstDisplay: ['Heater-1', 'Heater-2', 'Heater-3', 'Heater-4', 'Heater-6',
                 'Dsc-Oh', 'Kick-n-Hat', 'RP4-Kick', 'Cev-H3'],
  currentDisplay: null,
  soundSwitch: true,
  powerSwitch: true,
  volume: 1,
  reverseSound: null,
  secondDisplay: [],
})

let playAudio = (i) => {
  let audio = new Audio(state.firstSound[i]);
  audio.play();
  audio.volume = state.volume
}

let secondAudio = (i) => {
  let audio = new Audio(state.reverseSound[i]);
  audio.play();
  audio.volume = state.volume
}

let keyDown = (event) => {
  let button = event.key;
  console.log(button);
  for(let i = 0; i <= state.firstSound.length; i++){
    if(state.powerSwitch){
      if(button.toUpperCase() === state.keyBoard[i] && state.soundSwitch){
        playAudio(i);
        setState({...state, currentDisplay: state.firstDisplay[i]});
       }else if(button.toUpperCase() === state.keyBoard[i] && state.soundSwitch === false){
        secondAudio(i);
        setState({...state, currentDisplay: state.secondDisplay[i]});
       }
      }else {
        return;
      }
  }
}

useEffect(() => {
  window.addEventListener('keydown', keyDown);
  return () => {
    window.removeEventListener('keydown', keyDown);
  };
});

let clicked = (event) => {
  let click = event.target.innerText;
  console.log(state)

  for(let i = 0; i <= state.firstSound.length; i++){
  if(state.powerSwitch){
    if(click === state.keyBoard[i] && state.soundSwitch){
      playAudio(i);
      setState({...state, currentDisplay: state.firstDisplay[i]});
     }else if(click === state.keyBoard[i] && state.soundSwitch === false){
      secondAudio(i);
      setState({...state, currentDisplay: state.secondDisplay[i]});
     }
    }else {
      return;
    }
  }
}

let handleVolumeChange = (event) => {
  let target = event.target.value
  setState({...state, volume: target, currentDisplay: 'Volume ' + target})
}

let handlePower = () => {
  setState({...state, powerSwitch: !state.powerSwitch})
}
let handleSwitch = () => {
  let reverseSound = state.firstSound.map(i => i).reverse();
  let reverseDisplay = state.firstDisplay.map(i => i).reverse();
  setState({...state, soundSwitch: !state.soundSwitch, reverseSound: reverseSound, secondDisplay: reverseDisplay})
}



  return (
    <Board clicked={clicked}
           volume={state.volume}
           volumeControl={handleVolumeChange}
           firstDisplay={state.currentDisplay}
           keyBoard={state.keyBoard}
           switch={handleSwitch}
           power={handlePower}
           powerSwitch={state.powerSwitch}
           soundSwitch={state.soundSwitch}
    />
  )
}