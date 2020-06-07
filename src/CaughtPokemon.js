import React, { useState } from 'react';


function CaughtPokemon(props){
  const [totalCaught,settotalCaught] = useState([]) ;
  const [pokemonNameInput,setPokemonNameInput]=useState("");
   function incrementTotal (){
    settotalCaught(totalCaught.concat(pokemonNameInput));
    }
    function handleInputChange(event){
      setPokemonNameInput(event.target.value);
    }
    
  return(
    <div>
     <p> Caught {totalCaught.length} Pokemon on {props.updateDate} </p> 
      <input type="text"
       value ={pokemonNameInput}
       onChange={handleInputChange}/>
      <button onClick={incrementTotal}>Increment</button>
      </div>
     )


   }

   export default CaughtPokemon;   