import '../styles/capitulo-base.css'
import { useTheme } from "../context/context";
import { useEffect, useState } from 'react';
import CapituloCard from '../components/capitulo_card';

export default function Capitulos() {
  const { theme } = useTheme();
  const [capitulos, setCapitulos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCapitulos = async () => {
      const data = await getCapitulos();
      setLoading(false);
      setCapitulos(data.results);
    }
    
    fetchCapitulos();

  }, [])

  return (
    <div className={`base-${theme}`}>
      <div className={`base-capitulos-${theme}`}>
        <h1>Capítulos</h1>
        <div className={`container-capitulos-${theme}`}>
          {loading ? (
            <p>Cargando...</p>
          ) : (
            capitulos.map((capitulo) => (
              <div key={capitulo.id} className={`card-capitulos-${theme}`}>
                <CapituloCard capitulo={capitulo} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

async function getCapitulos() {
  const response = await fetch('https://rickandmortyapi.com/api/episode');
  const data = await response.json();
  return data;
}