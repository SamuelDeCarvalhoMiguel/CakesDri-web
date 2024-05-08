import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import services from '../../../api/services/recipeServices';

function ViewRecipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState();

  useEffect(() => {
    initializeRecipes();
  }, [])

  const initializeRecipes = () => {
    services.getById(id).then(res => {
      setRecipe(res);
    });
  }

  if (!recipe) {
    return <div className="viewRecipe">Recipe not found</div>;
  }

  if (!recipe?.imageAddress)
    recipe.imageAddress = '/img/gallery/Sample.jpeg'

  return (
    <div className="viewRecipe">
      <div className="viewRecipe-title">
        <h1>{recipe.title}</h1>
      </div>
      <div className="viewRecipe-image">
        <img src={recipe.imageAddress} alt={recipe.title} />
      </div>
      <div className="recipe-detail">
        <h2>Receita</h2>
        <div>
          <p>{recipe.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ViewRecipe;
