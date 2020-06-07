import React,{useState,useEffect} from 'react';

function BestPokemonSelector() {
  const [pokemonId, setPokemonId] = useState(null);

  function handleBulbasaurClick() {
    setPokemonId(1);
  }
  function handleCharmanderClick() {
    setPokemonId(4);
  }

  return (
    <div>
      <button onClick={handleBulbasaurClick}>Fetch Bulbasaur</button>
      <button onClick={handleCharmanderClick}>Fetch Charmander</button>
      {pokemonId ? <BestPokemonFetcher pokemonId={pokemonId} /> : null}
    </div>
  );
}

const BestPokemonFetcher = (props) => {
  const [bestPokemon,setBestPokemon] = useState(null);
  useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemonId}/`)
      .then(response => response.json())
      .then(data => setBestPokemon(data))
  },[props.pokemonId])

  return(
  (!bestPokemon) ?  null : (<BestPokemon pokemon={bestPokemon} />)
)
} 

function BestPokemon(props){
  console.log(props.bestPokemon);
  return (
       <div>
       <strong> which is your favourite Pokemon?</strong>
       <ul>
       {props.pokemon.abilities.map((element, index) => {
        return <li key={index}>{element.ability.name}</li>;
       })}
       </ul>
       </div>
     );
   
}

  export default BestPokemonSelector;