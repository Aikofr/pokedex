
function DisplayButton(props) {
const {pokemonIndex, setpokemonIndex, pokemonList} = props

const handleNext = () => {
    setpokemonIndex(pokemonIndex + 1)
    {pokemonIndex === 2 ? alert("pika pikachu !!!") : console.log("non")}
}

const handleBack = () => {
    setpokemonIndex(pokemonIndex - 1)
    {pokemonIndex === 4 ? alert("pika pikachu !!!") : console.log("non")}
}
    
    return <div>
        {pokemonIndex > 0 && (
        <button onClick={handleBack}>prédécent</button>
        )}
        {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={handleNext}>suivant</button>
        )}
        </div>
}

export default DisplayButton;