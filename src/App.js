import React from 'react';
import Logo from "./Logo"
import BestPokemon from "./BestPokemon"
import CaughtPokemon from "./CaughtPokemon"



function App() {
  const abilities = ['Anticipation', 'Adaptability', 'Run-Away']
  const date = new Date().toLocaleDateString()
  return (
    <div>
    <Logo appName="Pokedex" />
    <BestPokemon  abilitiesOfPokemon = {abilities} />
    <CaughtPokemon updateDate = {date}/>
    </div>
  );
}

export default App;
