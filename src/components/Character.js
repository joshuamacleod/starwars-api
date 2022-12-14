import React, { useState } from "react"; 
import { Link } from 'react-router-dom';

const Character = ({ name }) => {
  const [show, setShow] = useState(false);

  return (

    // 1. button to show/hide links to new pages
    <div className='card'>

    <button onClick={() => setShow(prev => !prev)}>
      <h3>{name}</h3>
    </button>

    <br />
    { show && <Link to={{ pathname: "/homeworld" }}>
       Home World
    </Link> }
    <br />
    { show && <Link to={{ pathname: "/species" }}>
       Species
    </Link> }
    <br />
    { show && <Link to={{ pathname: "/starship" }}>
       Starships
    </Link> }
    <br />
    { show && <Link to={{ pathname: "/vehicle" }}>
       Vehicle
    </Link> }
    <br />
    { show && <Link to={{ pathname: "/film" }}>
       Film
    </Link> }
    </div>
  );
};

export default Character;