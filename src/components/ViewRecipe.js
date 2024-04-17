import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import services from '../api/services/recipeServices';

function ViewRecipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState()

  useEffect(() => {
    initializeRecipes();
  }, [])

  const initializeRecipes = () => {
    services.getById(id).then(res => {
      setRecipe(res);
    });
  }

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div>
      <div className="viewRecipe-title">
        <h1>{recipe.title}</h1>
      </div>
      <div className="viewRecipe-image">
        <img src={recipe.imageAddress} alt={recipe.title} />
      </div>
      <div className="recipe-detail">
        <p>{recipe.description}</p>
      </div>
      <h1>Ingredientes</h1>
    </div>
  );
}

export default ViewRecipe;