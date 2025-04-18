import { useParams } from "react-router-dom";
import { useTheme } from "../../context/context";
import { useEffect, useState } from 'react';
import CharacterCard from "../../components/character_card";
import '../../styles/detail/episode.css';

const episodes = JSON.parse(localStorage.getItem('Personajesfav')) || [];

export default function Episode() {
    const {id} = useParams();
    const { theme } = useTheme();
    const [episodio, setEpisodio] = useState(null)
    const episodeFavorites = episodes.find(char => char.id == id) || [];
    const favCharacters = episodeFavorites.personajes || [];

    useEffect(() => {
        const fetchEpisodio = async () => {
            const data = await getEpisode(id);
            const randomCharactersUrls = getRandomItems(data.characters, 4);
            const characterResponses = await Promise.all(
                randomCharactersUrls.map(async (url) => {
                    const response = await fetch(url);
                    const characterData = await response.json();
                    return characterData;
                })
            );

            const favChars = await Promise.all(
                favCharacters.map(async (character) => {
                    const response = await fetch(`https://rickandmortyapi.com/api/character/${character.id}`);
                    const characterData = await response.json();
                    return characterData;
                })
            );

            setEpisodio({
            ...data,
            characters: characterResponses,
            charactersFav: favChars,
            });
        }
        
        fetchEpisodio();

    }, [])

    return (
        <div className={`base-${theme}`}>
            <div className={`base-capitulos-${theme}`}>
                <h1 className={`titulo-episodio-${theme}`}>{episodio?.name}</h1>

                <div className={`container-episodio-${theme}`}>
                    <p><strong>Fecha de estreno:</strong> {episodio?.air_date}</p>
                    <p><strong>Episodio:</strong> {episodio?.episode}</p>
                </div>

                <div className={`personajes-fav-episodio-${theme}`}>
                    {favCharacters?.length > 0 ? (
                        <div className={`container-fav-${theme}`}>
                            <h2 className={`titulo-fav-${theme}`}>Personajes Favoritos</h2>
                            <div className={`container-personajes-fav-${theme}`}>
                                {episodio?.charactersFav.map((character) => (
                                    <CharacterCard character={character} id={episodio?.id} flag={false} />
                                ))}
                            </div>
                        </div>
                    ) : (
                        <h2 className={`titulo-fav-${theme}`}>No hay personajes favoritos en este episodio</h2>
                    )}
                </div>

                <div className={`container-personajes-${theme}`}>
                    <h2 className={`titulo-personajes-${theme}`}>Personajes</h2>
                    <div className="container-personajes-episodio">
                        {episodio?.characters.map((character) => (
                            <CharacterCard character={character} id={episodio?.id} flag />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

async function getEpisode(id) {
    const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
    return response.json();
}

const getRandomItems = (array, count = 4) => {
    if (array.length <= count) return array;
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};
  
