import Carusel from "./components/Carusel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LastestMovie from "./components/LastestMovie";
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
      <LastestMovie/>
      <Footer/>
    </div>
  );
}

export default App;
