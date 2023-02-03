import React, { useState, useEffect } from 'react';


import axios from 'axios';
import Poke from './Poke';

const PokemonCard = ({id}) => {

  const [pokemon, setPokemon] = useState();

  const pokemonSearch = async (id) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setPokemon(response.data);
    console.log(pokemon);
  };

  useEffect(() => {
    console.log("useEffect")
    pokemonSearch(id);
  }, []);


  return (<div><p>{id}</p>
  {/* <Poke pokemon = {pokemon}/> */}
  </div>


  );
};

export default PokemonCard;
