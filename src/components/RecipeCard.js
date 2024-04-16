import CustomImage from "./CustomImage"
import PropTypes from 'prop-types';

export default function RecipeCard({ recipe }) {

    if (!recipe?.imageAddress)
        recipe.imageAddress = '/img/gallery/Sample.jpeg'


    return (
        <div className="recipe-card">
            <CustomImage imgSrc={recipe.imageAddress} />
            <div className="recipe-card-info">
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">{recipe.description}</p>
                <a href="/viewRecipe" className="view-button">View recipe</a>
            </div>
        </div>
    )
}


RecipeCard.propTypes = {
    recipe: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        imageAddress: PropTypes.string,
    }).isRequired,
};