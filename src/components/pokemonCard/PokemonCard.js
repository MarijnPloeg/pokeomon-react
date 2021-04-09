import React, {useEffect, useState} from "react";
import "./PokemonCard.css";
import Pokemon from "../pokemon/Pokemon";

function PokemonCard({pokemon}) {
    const [name, setName] = useState('');
    const [img, setImg] = useState('');
    const [hp, setHP] = useState('');
    const [type, setType] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');

    useEffect(() => {
        async function getPokemon() {
            try {
                let newPokemon = new Pokemon();
                newPokemon.fetchData(pokemon.url).then(r => {
                        setName(r.data.species.name);
                        setImg(r.data.sprites.other.dream_world.front_default)
                        setHP(r.data.stats[0].base_stat);
                        setType(r.data.types[0].type.name);
                        setWeight(r.data.weight);
                        setHeight(r.data.height);

                        return newPokemon;
                    }
                );
                return newPokemon;
            } catch (e) {
                console.log(e)
            }
        }
        getPokemon();
    }, [pokemon]);
    return (
        <>
            <div className="card">
                <img className="pokemonImage" src={img} alt={name}/>
                <h1 className="pokemonName">{name}</h1>
                <h5 className="pokemonHP">HP {hp}</h5>
                <ul className="pokemonInfo">
                    <li className="infoElement">Type: {type}</li>
                    <li className="infoElement">Weight: {weight}</li>
                    <li className="infoElement">Height: {height}</li>
                </ul>
            </div>
        </>
    );
}
    

export default PokemonCard;