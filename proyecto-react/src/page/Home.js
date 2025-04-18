import '../styles/home.css'
import { useState, useEffect } from 'react'
import LocationCard from '../functions/location_card'

export default function Home() {

  const [locations, setLocations] = useState(null)
  const [filteredLocations, setFilteredLocations] = useState(null)
  const [loading, setLoading] = useState(true)
  const [word, setWord] = useState(null)

  useEffect(() => {
    setTimeout(() => {const fetchLocations = async () => {
        const data = await getLocations();
        setLoading(false);
        setLocations(data)
    }

    fetchLocations()}, 200)
  }, [])

  useEffect(() => {
    const hasWord = word !== null && word !== undefined;
    
    if(!hasWord || word.trim() === "") {setFilteredLocations(locations); return;}

    const searchWords = word.split(" ");

    const results = locations.filter((item) => {
      const searchableText = `${item.description || ""}`.toLowerCase();
      return searchWords.every((word) => searchableText.includes(word));
    });

    setFilteredLocations(results);
    
    
  }, [word, locations]);

    return (
      <div className="base">
        {/* CABECERA */}
        <div className="head">
          <div className="head-title">
            <h2>Book unique places to stay and things to do.</h2>
            <h2>Unforgettable trips start with Airbnb</h2>
            <input type="text" placeholder="Search " className="search" onChange={(e) => setWord(e.target.value)} />
          </div>
        </div>

        {/* CONTENIDO */}
        <div className="content">
        {loading ? (
                    <p className='mensajes'>Cargando productos...</p>
                ) :
                filteredLocations && filteredLocations.length > 0 ? (
                    filteredLocations.map((item) => {
                        return (
                            <div>
                              <LocationCard location={item} />
                            </div>
                        );
                    })
                ) : (
                    <p className='mensajes'>No hay productos disponibles.</p>
        )}
        </div>

      </div>
    );
}

async function getLocations() {
  const products = await fetch("https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/property-listing-data.json");
  return products.json();
}