import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageStructure from "./components/Tutorial_Components/PageStructure/PageStructure"

//Page Layout
import Header from "./components/Layouts/Header/Header";
import Navigation from "./components/Layouts/Navigation/Navigation";
import Footer from "./components/Layouts/Footer/Footer";
import About from "./components/About";
import PageNotFound from "./components/Layouts/PageNotFound/PageNotFound";
import Shape from "./components/Tutorial_Components/Shapes/Shapes";
import "./App.css"
function App() {
  return (
    <div className="App">
      <Header />
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
          <Route
            path="/Shape"
            element={< Shape />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
