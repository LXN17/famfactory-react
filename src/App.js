import Header from "./components/Header";
import "./App.css";
import "./index.css";
import Prices from "./components/Prices";
import Services from "./components/Services";
import Ways from "./components/Ways";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Prices />
      <Services />
      <Ways />
      <Footer />
    </div>
  );
}

export default App;
