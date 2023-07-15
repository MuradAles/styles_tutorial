import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Layouts/Navigation/Navigation";
import PageStructure from "./components/Tutorial_Components/PageStructure/PageStructure"
import Footer from "./components/Layouts/Footer/Footer";
import About from "./components/About";
import PageNotFound from "./components/Layouts/PageNotFound/PageNotFound";
import "./App.css"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route
            path="/PageStructure"
            element={< PageStructure />} />
          <Route
            path="/About"
            element={< About />} />
          <Route
            path="*"
            element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
