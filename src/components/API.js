import React, { useState, useEffect } from "react"; 
import "../App.css"
import Character from "./Character.js";

const Home = () => {
  const [results, setResults] = useState([]);

  // fetching the data 
  
  const performLookup = () => {
    fetch(`https://swapi.dev/api/people/`)
      .then((response) => response.json())
      .then((data) => setResults(data.results))
      .catch((error) => console.log(error));
 
    setResults(results);
    console.log(results); 
  };

  // run the query 

  useEffect(() => {
    performLookup();
  }, []);

  return (

      // 1. api passes data into Character component
      // 2. displays Character component

     <div className='cardformat'>
      {results.map((result) => (
         <Character
          value={result}
          key={result.name}
          name={result.name}
          homeworld={result.homeworld}
          species={result.species}
          starships={result.starships}
          vehicle={result.vehicle}
          film={result.film}
        /> 
      ))}
    </div>
  );
};

export default Home;
