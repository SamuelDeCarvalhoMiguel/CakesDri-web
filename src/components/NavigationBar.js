import { Link } from "react-router-dom"

export default function NavigationBar() {

    const links = [
        {
            id: 1,
            name: "Recipes",
            path: "/recipes"
        },
        {
            id: 2,
            name: "Create",
            path: "/create"
        }
    ]

    return (
        <div className="navigationbar container">
            <a href="/" className="logo">CakesDri</a>
            <div className="navigation-links">
                {links.map(link => (
                    <Link key={link.id} to={link.path}>{link.name}</Link>
                ))
                }
            </div>
        </div>
    )
}