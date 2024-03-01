import Header from "./components/Header/Header";
import FirstPage from "./components/FirstPage/FirstPage";
import './App.css'
import Company from "./components/Company/Company";
import ServicesPage from "./components/ServicesPage/ServicesPages";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import GetTouch from "./components/GetTouch/GetTouch";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <header>
        <div className="white-gradient"/>
        <Header />
        <FirstPage />
      </header>
      
      <section id="services">
        <ServicesPage />
      </section>
      <section>
        <Company/> 
        <Value />
      </section>
      <section id="contact">
        <Contact />
        <GetTouch />
      </section>    
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;