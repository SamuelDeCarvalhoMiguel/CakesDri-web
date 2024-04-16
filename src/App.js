import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import NavigationBar from "./components/NavigationBar";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Create from "./pages/Create";
import ViewRecipe from "./components/ViewRecipe";

function App() {
  return (
    <Router>
      <NavigationBar />
      <div className="container main">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/recipes" element={<Recipes />} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/viewRecipe/:id" element={<ViewRecipe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
