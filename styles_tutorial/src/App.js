import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
//Page Layout
import Header from "./components/Layouts/Header/Header";
import Navigation from "./components/Layouts/Navigation/Navigation";
import Footer from "./components/Layouts/Footer/Footer";
import PageNotFound from "./components/Layouts/PageNotFound/PageNotFound";

import About from "./components/About";
//Tutorial Routes
import Shape from "./components/Tutorial_Components/Shapes/Shapes";
import PageStructure from "./components/Tutorial_Components/PageStructure/PageStructure"
import ScrollingEffect from "./components/Tutorial_Components/Scrolling-Effect/Scrolling-Effect";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="Body">
          <Navigation />
          <Routes>
            <Route
              path="*"
              element={<PageNotFound />} />
            <Route
              path="/PageStructure"
              element={< PageStructure />} />
            <Route
              path="/About"
              element={< About />} />
            <Route
              path="/Shape"
              element={< Shape />} />
            <Route
              path="/Scrolling_Effect"
              element={< ScrollingEffect />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
