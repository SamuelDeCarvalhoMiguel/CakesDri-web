import { useEffect, useState } from "react"
import PreviousSearches from "../../components/PreviousSearches"
import RecipeCard from "./components/RecipeCard"
import services from "../../api/services/recipeServices"

export default function Recipes() {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        initializeRecipes();
    }, [])

    const initializeRecipes = () => {
        services.getAll().then(res => {
            setRecipes(res);
        })
    }

    return <div>
        <PreviousSearches />
        <div className="recipes-container">
            {recipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
        </div>
    </div>
}