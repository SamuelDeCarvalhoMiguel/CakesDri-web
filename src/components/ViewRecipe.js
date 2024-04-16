import React from 'react';
import { useParams } from 'react-router-dom';

function ViewRecipe() {
  const { id } = useParams();

  // const recipe = getRecipeById(id);

  // if (!recipe) {
  //   return <div>Recipe not found</div>;
  // }

  // return (
  //   <div className="recipe-detail">
  //     <h1>{recipe.title}</h1>
  //     <img src={recipe.imageAddress} alt={recipe.title} />
  //     <p>{recipe.description}</p>
  //   </div>
  // );
  return (<div>{id}</div>)
}

export default ViewRecipe;