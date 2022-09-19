import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./miApi.css"; 

const MiApi = ({search, order}) => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    getInformation();
  }, []);

  const getInformation = async () => {
    const url = 'https://saint-seiya-api.herokuapp.com/api/characters';
    const response = await fetch(url);
    const data = await response.json();
    setCharacter(data);
  };

  const sortedCharacters = character.filter((personaje) =>
  (personaje.name.toLowerCase().includes(search.toLowerCase()) 
  || personaje.cloths.some(e => e.cloth.toLowerCase().includes(search.toLowerCase())))
  && personaje.name !== "" 
  && personaje.cloths.some(e => e.debut.toLowerCase() === "classic")
).sort((a,b) =>  a.name > b.name)


  if (!order)
    sortedCharacters.reverse();

  return (
      <div className="cards">
        {sortedCharacters.map((c) => (
            <Card key={c.id} saints={c}/>
        ))}
      </div>
  );
};

export default MiApi;
