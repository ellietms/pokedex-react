import React, { useState } from 'react';


function CaughtPokemon(props){
  const [totalCaught,settotalCaught] = useState(100) ;
   function incrementTotal (){
    settotalCaught(totalCaught + 1);
    }

  return(
    <div>
     <p> Caught {totalCaught} Pokemon on {props.updateDate} </p> 
      <button onClick={incrementTotal}>Increment</button>
      </div>
     )


   }

   export default CaughtPokemon;   