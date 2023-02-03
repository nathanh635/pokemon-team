import Card from 'react-bootstrap/Card';
import PokemonCard from './PokemonCard';


const Home = () => {


  let ids = [1, 2, 3,4, 5, 6]
    // for(let i = 0; i<6;i++){
    // ids[i] = Math.floor(Math.random() * 151) + 1;}

    console.log(ids);



  return (
    <>
    <h1>What's your Pokemon Team?</h1>


      {ids.map((result) => (
        <PokemonCard id={result}/>
      ))}


    </>
  );
};

export default Home;
