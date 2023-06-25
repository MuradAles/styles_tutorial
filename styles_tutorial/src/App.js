import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import About from "./components/About";
import PageStructure from "./components/PageStructure"
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
