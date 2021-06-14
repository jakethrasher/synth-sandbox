import React from 'react';
import './App.css';
import * as Tone from 'tone'

function App() {
  
  const env1 = new Tone.Envelope({
    attack: 0.01,
    // attackCurve:'bounce',
    decay: 0.5,
    sustain:0, 
    release:0,
  })
  const filter = new Tone.Filter(5000, 'lowpass').toDestination()
  const wood = new Tone.MembraneSynth({
    envelope: env1,
    octaves:2,
    pitchDecay: 1,
  }).toDestination()
  
  const metal = new Tone.MetalSynth({
    // envelope:env1,
    // harmonicity : 1,
    // modulationIndex : 1,
    // octaves : 1,
    // resonance: '5',
  }).connect(filter)

  const env2 = new Tone.Envelope({
    attack: 0.01,
    decay: 0.8,
    sustain:0.5, 
    release:8,
  })
  const rubber = new Tone.FMSynth({
    harmonicity:30,
    envelope:env1,
    modulationEnvelope:env2,
    modulationIndex: 50,
  }).toDestination();

  const handleWoodSynth = () =>{
    wood.triggerAttackRelease('C2', '16n')
  }
    
  const handleMetalSynth = () =>{
    metal.triggerAttackRelease('C4', '8n')
  }

  const handleMetal2Synth = () => {
    rubber.triggerAttackRelease('C2', '16n')
  }

  
 
  return (
    <div className="App">
      <button onClick={handleWoodSynth}>Wood</button>
      <button onClick={handleMetalSynth}>Metal</button>
      <button onClick={handleMetal2Synth}>Metal2</button>
      <button>SOUND 4</button>
    </div>
  );
}

export default App;
