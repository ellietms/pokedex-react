import React from 'react';
import Logo from "./Logo"
import BestPokemon from "./BestPokemon"
import CaughtPokemon from "./CaughtPokemon"



function App() {
  const abilities = ['Anticipation', 'Adaptability', 'Run-Away']
  const date = new Date().toLocaleDateString()
  function logWhenClicked(){
    console.log("it doesn't matter what the message is")
  }
  return (
    <div>
    <Logo appName="Pokedex" handleClick={logWhenClicked} />
    <BestPokemon  abilitiesOfPokemon = {abilities} />
    <CaughtPokemon updateDate = {date}/>
    </div>
  );
}

export default App;
