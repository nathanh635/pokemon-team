import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react';

import PokemonCard from './PokemonCard';


const Home = () => {

  const [pokemon, setPokemon] = useState([]);


    useEffect(() => {
      console.log("useEffect");
      let ids = [];
      for(let i = 0; i<6;i++){
      ids[i] = Math.floor(Math.random() * 151) + 1;}

      for(let i = 0; i<6; i++){
      fetch(`https://pokeapi.co/api/v2/pokemon/${ids[i]}/`)
      .then(res => res.json())
      .then((data) => {
        console.log(data);
          setPokemon([...pokemon, data]);
    })      .catch((err) => {
      console.log(err.message);
   });}}, []);

   console.log(pokemon);

  return (
    <>
    <h1>What's your Pokemon Team?</h1>


      {pokemon.map((poke) => (
            <Card style={{ width: '18rem' }}>
            { <Card.Img variant="top" src={poke.sprites.front_default} /> }
            <Card.Body>
              <Card.Title>{poke.name}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
      ))}


    </>
  );
};

export default Home;
