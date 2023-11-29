import CustomImage from "./CustomImage"

export default function RecipeCard({ recipe }) {
    return (
        <div className="recipe-card">
            <CustomImage imgSrc={recipe.image} />
            <div className="recipe-card-info">
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">{recipe.desc}</p>
                <a href="3!" className="view-button">View recipe</a>
            </div>
        </div>
    )
}