import { Link } from "react-router-dom"

export default function NavigationBar() {

    const links = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Recipes",
            path: "/recipes",
        },
        {
            name: "Create",
            path: "/create",
        }
    ]
    return (
        <div className="navigationbar container">
            <a href="/" className="logo">CakesDri</a>
            <div className="navigation-links">
                {links.map(link => (
                    <Link to={link.path}>{link.name}</Link>
                ))
                }
            </div>
        </div>
    )
}