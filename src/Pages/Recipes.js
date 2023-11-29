import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard"

export default function Recipes() {
    const recipes = [
        {
            title: "BRIGADEIRO GOURMET",
            image: "/img/gallery/brigadeiros.jpg",
            desc: "RENDIMENTO: 31 Brigadeiros com 15g de massa e 18g de peso final (com os granulados de chocolate)",
        },
        {
            title: "BOLO DE TESTE",
            image: "/img/gallery/bolo-drip-cake-simples-de-morango.jpg",
            desc: "RENDIMENTO: 31 Brigadeiros com 15g de massa e 18g de peso final (com os granulados de chocolate)",
        }, {
            title: "BRIGADEIRO GOURMET",
            image: "/img/gallery/brigadeiros.jpg",
            desc: "RENDIMENTO: 31 Brigadeiros com 15g de massa e 18g de peso final (com os granulados de chocolate)",
        },
        {
            title: "BOLO DE TESTE",
            image: "/img/gallery/bolo-drip-cake-simples-de-morango.jpg",
            desc: "RENDIMENTO: 31 Brigadeiros com 15g de massa e 18g de peso final (com os granulados de chocolate)",
        }
    ].sort(() => Math.random() - 0.5)

    return <div>
        <PreviousSearches />
        <div className="recipes-container">
            {recipes.map((recipe, index) => (
                <RecipeCard key={index} recipe={recipe} />
            ))}
        </div>
    </div>
}