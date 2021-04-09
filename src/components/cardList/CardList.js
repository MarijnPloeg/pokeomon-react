import React, {useEffect,useState} from "react";
import PokemonCard from "../pokemonCard/PokemonCard";
import "./cardList.css";
import axios from "axios";

function CardList() {
    const [pokemons, setPokemons] = useState([]);
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');

    async function fetchPokemon() {
        try {
            const {data: {results, next, previous}} = await axios.get(url);
            setPokemons({
                results: results,
                next: next,
                previous: previous,
            });
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        url && fetchPokemon();
    }, [url]);

    return (
        <>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1024px-International_Pok%C3%A9mon_logo.svg.png"
                alt="Pokemon Logo"
                className="pokemonLogo"
                onClick={window.location.reload}
            />
            <nav className="navigation">
                <button type="button" disabled={!pokemons.previous} onClick={() => setUrl(pokemons.previous)}
                        className="navButton">Previous
                </button>
                <button type="button" disabled={!pokemons.next} onClick={() => setUrl(pokemons.next)}
                        className="navButton">Next
                </button>
            </nav>
            <div className="cards">
                {pokemons.results && pokemons.results.map(pokemon => {
                        return <PokemonCard pokemon={pokemon}/>
                    }
                )}
            </div>
        </>
    );
}

export default CardList;