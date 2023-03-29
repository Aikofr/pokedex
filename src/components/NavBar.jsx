
function DisplayButton({pokemonIndex, setpokemonIndex, pokemonList}) {

// const handleNext = () => {
//     setpokemonIndex(pokemonIndex + 1)
// }

// const handleBack = () => {
//     setpokemonIndex(pokemonIndex - 1)
// }

const handleClick = (index) => {
    setpokemonIndex(index);
};

    return <div>

        {pokemonList.map((pokemon, index) => (
            <button key={pokemon.name} onClick={() => handleClick(index)}>
                {pokemon.name}
            </button>
        ))}

        {/* {pokemonIndex > 0 && (
        <button onClick={handleBack}>prédécent</button>
        )}
        {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={handleNext}>suivant</button>
        )} */}
        </div>
};

export default DisplayButton;