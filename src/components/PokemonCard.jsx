function PokemonCard({pokemon}) {

    return (
        <figure>
          {pokemon.imgSrc ? (<img src={pokemon.imgSrc} alt={pokemon.name}/>) : (<p>???</p>)}
          <figcaption>{pokemon.name}</figcaption>
          {/* <h1>{props.name}</h1> */}
        </figure>
    );
}


export default PokemonCard;