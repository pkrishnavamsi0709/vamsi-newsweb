import React from 'react';
import giphy from './giphy2.gif';

const Spinner = () =>{
    return (
      <div  className="text-center" >
        <img className="my-3"src={giphy}alt="img is loading"/>
      </div>
    )
  }
  export default Spinner