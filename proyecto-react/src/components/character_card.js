import { useTheme } from "../context/context";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { useReducer } from "react";
import { useEffect } from "react";
import "../styles/character-card.css";

function handlevotes(state, action){
    if(action.type === "LIKE"){
        return{
            ...state,
            like: state.like + 1
        }
    }

    if(action.type === "DISLIKE"){
        return{
            ...state,
            dislike: state.dislike + 1
        }
    }

}

export default function CharacterCard({character, id, flag}) {
    const { theme } = useTheme();
    const initialVotes = loadCharacterVotes(id, character.id);
    const [state, dispatch] = useReducer(handlevotes, initialVotes);

    useEffect(() => {
        saveVotes(state, id)
    }, [state]);

    return (
        <div className={`card-personaje-${theme}`} onClick={() => window.location.href=`/character/${character.id}`}>
            <div className={`info-personaje-${theme}`}>
                <h3 className={`nombre-personaje-${theme}`}>{character.name}</h3>
                <div className={`container-microinfo-persoanje-${theme}`}>
                    <p className={`estado-personaje-${theme}`}>Status: {character.status}</p>
                    <p className={`especie-personaje-${theme}`}>Especie: {character.species}</p>
                    <p className={`gender-personaje-${theme}`}>Género: {character.gender}</p>
                    <p className={`origen-personaje-${theme}`}>Origen: {character.origin.name}</p>
                    <p className={`ubicacion-personaje-${theme}`}>Locación: {character.location.name}</p>
                </div>
                <button className={`btn-personaje-${theme}`}>
                    <p className={`btn-text-${theme}`}>Ver detalles</p>
                </button>
                {flag ? 
                    <div className={`card-personaje-likes-${theme}`} onClick={(e) => e.stopPropagation()}>
                        <div className="icon-like">
                            <p>{state.like}</p>
                            <FaThumbsUp className={`icon-${theme}`} onClick={() => dispatch({ type: "LIKE"})} />
                        </div>
                        <div className="icon-dislike">
                            <p>{state.dislike}</p>
                            <FaThumbsDown className={`icon-${theme}`} onClick={() => dispatch({ type: "DISLIKE"})} />
                        </div>
                    </div>
                    : 
                    <p></p>
                }
            </div>

            <img src={character.image} alt={character.name} className={`imagen-personaje-${theme}`} />
        </div>
    );
}

function loadCharacterVotes(episode_id, character_id){
    const votesPerEpisode = JSON.parse(localStorage.getItem('CharactersVotes')) || [];
    const episodeVotes = votesPerEpisode.find(episodes => episodes.id === episode_id);
    const characterVotes = episodeVotes.personajes.find(character => character.id === character_id) || [];

    if(characterVotes.length === 0){
        const initialVotes = {
            id: character_id,
            like: 0,
            dislike: 0
        }
        episodeVotes.personajes.push(initialVotes);
        localStorage.setItem('CharactersVotes', JSON.stringify(votesPerEpisode));
        return initialVotes;
    }
    
    return characterVotes;
}

function saveVotes(state, espisode_id) {
    const votesPerEpisode = JSON.parse(localStorage.getItem('CharactersVotes')) || [];
    const episodeVotes = votesPerEpisode.find(episodes => episodes.id === espisode_id);
    episodeVotes.personajes[episodeVotes.personajes.findIndex(character => character.id === state.id)] = state;
    localStorage.setItem('CharactersVotes', JSON.stringify(votesPerEpisode));
    if(state.like > 0){
        getTopLikes(episodeVotes.personajes, espisode_id);
    }
}

function getTopLikes(items, episode_id){
    const top3Likes = items
        .filter(item => item.like > 0)
        .sort((a, b) => b.like - a.like)
        .slice(0, 3);
    
    const characters = JSON.parse(localStorage.getItem('Personajesfav')) || []; 
    const episodeFavorites = characters.find(episodes => episodes.id === episode_id);
    episodeFavorites.personajes = []

    top3Likes.map((like) => (
        episodeFavorites.personajes.push(like)
    ))
    
    localStorage.setItem('Personajesfav', JSON.stringify(characters));
}