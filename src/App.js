import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import NavigationBar from "./components/NavigationBar";

import Home from "./Pages/Home";
import Recipes from "./Pages/Recipes";
import Create from "./Pages/Create";

function App() {
  return (
    <Router>
      <NavigationBar />
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
