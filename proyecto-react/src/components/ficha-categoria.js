import '../styles/ficha-categoria.css';

export default function FichaCategoria({ category, isSelected, onClick }) {
    return (
        <div className={`category-${isSelected}`} onClick={onClick}>
            <div className="category-image">
                <img src={category.strCategoryThumb} alt={category.strCategory} />
            </div>
            <h2>{category.strCategory}</h2>
        </div>
    );
}