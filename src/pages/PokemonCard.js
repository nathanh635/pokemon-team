import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';



import Poke from './Poke';

const PokemonCard = ({id}) => {

  const [pokemon, setPokemon] = useState();


  useEffect(() => {
    console.log("useEffect");
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json())
    .then((data) => {
      console.log(data);
        setPokemon(data);
  })      .catch((err) => {
    console.log(err.message);
 });}, []);




  return (<div>
    <Card style={{ width: '18rem' }}>
    { <Card.Img variant="top" src={pokemon.sprites.front_default} /> }
    <Card.Body>
      <Card.Title>{pokemon.name}</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  </div>


  );
};

export default PokemonCard;
