import Carusel from "./components/Carusel";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import './style/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Carusel/>
      <Section/>
    </div>
  );
}

export default App;
