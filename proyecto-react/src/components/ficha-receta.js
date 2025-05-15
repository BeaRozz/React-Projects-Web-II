import '../styles/ficha-receta.css';

export default function FichaReceta({ receta }) {
  return (
    <div className="ficha-receta" onClick={() => window.location.href=`/recepie/${receta.idMeal}`}>
      <div className="ficha-receta-img">
        <img src={receta.strMealThumb} alt={receta.strMeal} />  
      </div>
      <h2>{receta.strMeal}</h2>
    </div>
  );
}