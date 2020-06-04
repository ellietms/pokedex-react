import React from 'react';
import BestPokemonFetcher from './BestPokemonFetcher';

function BestPokemon(props){
 return (
      <div>
      <strong> which is your favourite Pokemon?</strong>
      <ul>
      {props.abilities.map((ability,index) => 
      (<li key={index}> {ability} </li>)) 
      }
      </ul>
      </div>
    );
  
  }
  
 

  export default BestPokemonFetcher;