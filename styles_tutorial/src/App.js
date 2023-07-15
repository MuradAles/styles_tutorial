import Navigation from "./components/Layouts/Navigation/Navigation";
import Footer from "./components/Layouts/Footer/Footer";
import About from "./components/About";
import PageStructure from "./components/Tutorial_Components/PageStructure/PageStructure"
import "./App.css"
function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="Body">
        <About />
        <PageStructure />
        <Footer />
      </div>
    </div>
  );
}

export default App;
