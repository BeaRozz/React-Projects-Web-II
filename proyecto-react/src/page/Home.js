import '../styles/home.css'
import piña from '../img/piña.png'
import { GiChefToque } from 'react-icons/gi'
import { useEffect } from 'react';
import { useState } from 'react';
import FichaCategoria from '../components/ficha-categoria';
import FichaReceta from '../components/ficha-receta';
import { FiSearch } from 'react-icons/fi'

export default function Home() {

  const [categories, setCategories] = useState([]);
  const [categorieSelected, setCategorieSelected] = useState(getLastCategory());
  const [platillos, setPlatillos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [word, setWord] = useState(null);
  const [filteredPlatillos, setFilteredPlatillos] = useState([]);

  // Al cargar la página, se obtienen las categorías
  useEffect(() =>{
    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    }

    fetchCategories()
    
  }, [])


  // Cuando se selecciona una categoría, se obtienen los platillos de esa categoría
  useEffect(() => {
    const fetchPlatillos = async () =>{
      const data = await getPlatillosByCategory(categorieSelected);
      setPlatillos(data);
      setLoading(false);
    }

    fetchPlatillos()
    localStorage.setItem('lastCategory', categorieSelected);
  }, [categorieSelected])
  

  // Cuando se escribe una palabra, se filtran los platillos
  useEffect(() => {
    const hasWord = word !== null && word !== undefined;
    
    if(!hasWord || word.trim() === "") {setFilteredPlatillos(platillos); return;}

    const searchWords = word.split(" ");

    const results = platillos.filter((item) => {
      const searchableText = `${item.strMeal || ""}`.toLowerCase();
      return searchWords.every((word) => searchableText.includes(word));
    });

    setFilteredPlatillos(results);
    
  }, [word, platillos]);

    return (
      <div className="base">
        
        {/* Hero title */}
        <div className="hero">
          <div className="left-column">
            <img src={piña} alt="Piña" className="pineapple" />
          </div>

          <div className="right-column">
            <div className="logo">
              <GiChefToque className="chef-icon" />
              <span>HomeChef</span>
            </div>

            <div className="title-row">
              <h1 className="line">Chefs</h1>
              <div className="message">🔶 New recipe for you to try out, let’s cook!</div>
            </div>

            <h1 className="line right">Academy</h1>
            <h1 className="line">Secrets</h1>
          </div>
        </div>
        
        <div className="content-container">
          {/* CATEGORÍAS */}
          <div className="categorias">
            <h1>Categorías</h1>
            {/* MAPEA LAS CATEGORÍAS */}
            <div className="categories">
              {categories.map((category) => (
                <FichaCategoria 
                  key={category.idCategory} 
                  category={category} 
                  onClick={() => {setCategorieSelected(category.strCategory)}}
                  isSelected={categorieSelected === category.strCategory} 
                />
              ))}
            </div>
          </div>
          
          {/* BASE DE CONTENIDO */}
          <div className="content">
            
            {/* BARRA DE BÚSQUEDA Y SORTBY */}
            <div className="search">
              <div className="search-bar">
                <FiSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={(e) => setWord(e.target.value)}
                />
              </div>
              <div className="sortby">
                <select>
                  <option value="sortBy">Sort by</option>
                  <option value="name">Name</option>
                  <option value="category">Category</option>
                  <option value="area">Area</option>
                </select>
              </div>
            </div>

            {/* GRID DE PLATILLOS */}
            <div className="platillos">
              {loading ? (
                <div className="loading">Loading...</div>
              ) : (
                filteredPlatillos.length > 0 ?(
                  filteredPlatillos.map((platillo) => (
                  <div key={platillo.idMeal} className="platillo">
                    <FichaReceta receta={platillo} />
                  </div>
                ))
                ): (
                  <h1>No se encontraron resultados para: {word}</h1>
                )
              )}
            </div>
          </div>

        </div>
      </div>
    );
}

async function getCategories() {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
  const data = await response.json();
  return data.categories;
}

async function getPlatillosByCategory(category) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
  const data = await response.json();
  return data.meals;
}

function getLastCategory(){
  const getLastCategory = localStorage.getItem('lastCategory') || "Beef";
  console.log(getLastCategory);
  // Si no hay categoría guardada, se asigna "Beef" como valor por defecto
  return getLastCategory;
}