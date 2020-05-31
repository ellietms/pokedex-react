import React from 'react';

function BestPokemon(props){
    return (
      <div>
      <strong> which is your favourite Pokemon?</strong>
      <ul>
      { props.abilitiesOfPokemon.map((ability,index) => {
        return(<li key={index}> {ability} </li>)
      }) 
      }
      </ul>
      </div>
    );
  
  }

  export default BestPokemon;