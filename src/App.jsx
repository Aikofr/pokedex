import PokemonCard from "./components/PokemonCard"
import DisplayButton from "./components/NavBar"
import { useState } from "react";
import { useEffect } from "react";

function App() {

  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];

  const [pokemonIndex, setpokemonIndex] = useState(0);

  useEffect(
    () =>  {
      console.log("hello pokemon trainer :)");    
    }, 
    []
 );

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
      <DisplayButton pokemonIndex={pokemonIndex} setpokemonIndex={setpokemonIndex} pokemonList={pokemonList}/>
    </div>
    
  )
}

export default App