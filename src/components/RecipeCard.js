import CustomImage from "./CustomImage"
import PropTypes from 'prop-types';

export default function RecipeCard({ recipe }) {

    if (!recipe?.imageAdress)
        recipe.imageAdress = '/img/gallery/Sample.jpeg'


    return (
        <div className="recipe-card">
            <CustomImage imgSrc={recipe.imageAdress} />
            <div className="recipe-card-info">
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">{recipe.description}</p>
                <a href="3!" className="view-button">View recipe</a>
            </div>
        </div>
    )
}


RecipeCard.propTypes = {
    recipe: PropTypes.object.isRequired,
};