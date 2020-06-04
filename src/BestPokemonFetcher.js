import React , {useState, useEffect} from 'react';
import BestPokemon from './BestPokemon';


const BestPokemonFetcher = () => {
    const [bestPokemon,setBestPokemon] = useState(null);
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/1/`)
        .then(response => response.json())
        .then(data => setBestPokemon(data))
    },[])
    return(
        
    (!bestPokemon) ?  null : (<BestPokemon pokemon={bestPokemon} /> )
    
    )
}
  

export default BestPokemonFetcher;