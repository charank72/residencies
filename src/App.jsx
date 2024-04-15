import Header from "./components/Header/Header";
import Hero from "./components/hero/Hero";
import './App.css'
import Companies from "./components/companies/Companies";
import Residencides from "./components/residencies/Residencides";
import Value from "./components/Value/Value";
import Contact from "./components/contactUs/Contact";
import GetStarted from "./components/getStarted/GetStarted";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <div className="Appg">
        <div className="white-gradient"/>
        <Header />
        <Hero />
      </div>
      <Companies/>
      <Residencides/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
