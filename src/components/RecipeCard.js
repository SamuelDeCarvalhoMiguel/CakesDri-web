import CustomImage from "./CustomImage"
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function RecipeCard({ recipe }) {

    if (!recipe?.imageAddress)
        recipe.imageAddress = '/img/gallery/Sample.jpeg'

    return (
        <div className="recipe-card">
            <CustomImage imgSrc={recipe.imageAddress} />
            <div className="recipe-card-info">
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">{recipe.description}</p>
                <Link to={`/viewRecipe/${recipe.id}`} className="view-button">View recipe</Link>
            </div>
        </div>
    )
}


RecipeCard.propTypes = {
    recipe: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        imageAddress: PropTypes.string,
    }).isRequired,
};