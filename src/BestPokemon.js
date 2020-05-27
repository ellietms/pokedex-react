import React from 'react';

function BestPokemon(props){
    return (
      <div>
      <p><strong> which is your favourite Pokemon?</strong>
      <ul>
      { props.abilitiesOfPokemon.map((ability,index) => {
        return(<li key={index}> {ability} </li>)
      }) 
      }
      </ul>
      </p>
      </div>
    );
  
  }

  export default BestPokemon;