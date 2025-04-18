import { useTheme } from "../context/context";
import '../styles/buscador.css';
import { useEffect, useState } from 'react';
import CharacterCard from "../components/character_card";

export default function Buscador() {
  const { theme } = useTheme();
  const [personajes, setPersonajes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    status: "",
    species: "",
    type: "",
    gender: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: value
    }));
  };

  useEffect(() => {
    const fetchPersonajes = async () => {
      setLoading(true); // empieza la carga
  
      const query = Object.entries(inputs)
        .filter(([_, value]) => value)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join("&");
  
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?${query}`);
        const data = await response.json();
        if (data.results) {
          setPersonajes(data.results);
        } else {
          setPersonajes([]); // sin resultados válidos
        }
      } catch (error) {
        console.error("Error fetching personajes:", error);
      } finally {
        setLoading(false); // termina la carga
      }
    };
  
    fetchPersonajes();
  }, [inputs]);
  
  

  return (
    <div className={`base-${theme}`}>
      <div className={`base-buscador-${theme}`}>
        <h1>Busca a tus personajes</h1>
        <div className={`buscador-${theme}`}>
          <div className={`buscador-filters-${theme}`}>
            <input
              type="text"
              name="name"
              placeholder="Escribe el nombre del personaje"
              onChange={handleChange}
            />
            <input
              type="text"
              name="species"
              placeholder="Escribe la especie del personaje"
              onChange={handleChange}
            />
            <input
              type="text"
              name="type"
              placeholder="Escribe el tipo del personaje"
              onChange={handleChange}
            />
            <div className={`buscador-select-${theme}`}>
              <div className={`select-${theme}`}>
                <p>Status:</p>
                <select name="status" id="status" defaultValue="" onChange={handleChange}>
                  <option value="" disabled hidden>Status</option>
                  <option value="alive">alive</option>
                  <option value="dead">dead</option>
                  <option value="unknown">unknown</option>
                </select>
              </div>
              <div className={`select-${theme}`}>
                <p>Género:</p>
                <select name="gender" id="gender" defaultValue="" onChange={handleChange}>
                  <option value="" disabled hidden>Género</option>
                  <option value="female">female</option>
                  <option value="male">male</option>
                  <option value="genderless">genderless</option>
                  <option value="unknown">unknown</option>
                </select>
              </div>
            </div>

          </div>
        </div>

        <div className={`container-result-buscador-${theme}`}>
          {loading ? (
            <p className="loading-text">Cargando personajes...</p>
          ) : personajes.length > 0 ? (
            personajes.map((character) => (
              <div className={`card-personaje-${theme}`} onClick={() => window.location.href=`/character/${character.id}`}>
                <div className={`info-personaje-${theme}`}>
                    <h3 className={`nombre-personaje-${theme}`}>{character.name}</h3>
                    <div className={`container-microinfo-persoanje-${theme}`}>
                        <p className={`estado-personaje-${theme}`}>Status: {character.status}</p>
                        <p className={`especie-personaje-${theme}`}>Especie: {character.species}</p>
                        <p className={`gender-personaje-${theme}`}>Género: {character.gender}</p>
                        <p className={`origen-personaje-${theme}`}>Origen: {character.origin.name}</p>
                        <p className={`ubicacion-personaje-${theme}`}>Locación: {character.location.name}</p>
                        <p className={`especie-personaje-${theme}`}>Tipo: {character.type}</p>
                    </div>
                    <button className={`btn-personaje-${theme}`}>
                        <p className={`btn-text-${theme}`}>Ver detalles</p>
                    </button>
                </div>

                <img src={character.image} alt={character.name} className={`imagen-personaje-${theme}`} />
            </div>
            ))
          ) : (
            <p>No se encontraron personajes</p>
          )}
        </div>

      </div>
    </div>
  );
}