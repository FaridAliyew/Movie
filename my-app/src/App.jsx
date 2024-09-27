import About from "./components/About";
import Carusel from "./components/Carusel";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LastestMovie from "./components/LastestMovie";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import './style/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Navbar />
            <Carusel />
            <Section />
            <LastestMovie />
            <Footer />
          </>
        } />

        <Route path="/about" element={
          <>
            <Header/>
            <Navbar/>
            <About/>
            <LastestMovie/>
            <Footer/>
          </>
        }/>
        
        <Route path="/contact" element={
          <>
            <Header/>
            <Navbar/>
            <Contact/>
            <LastestMovie/>
            <Footer/>
          </>
        }/>

      </Routes>
    </>
  );
}

export default App;
