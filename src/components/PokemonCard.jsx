function PokemonCard(pokemon) {
    return (
        <figure>
          {pokemon.img ? (<img src={pokemon.img} alt={pokemon.name}/>) : (<p>???</p>)}
          <figcaption>{pokemon.name}</figcaption>
          {/* <h1>{props.name}</h1> */}
        </figure>
    );
}


export default PokemonCard;