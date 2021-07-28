
import './App.css';
import Header from "../src/components/Header/header";
import Navbar from './components/Navbar/nav';
import About from './components/about/about';
import Cards from './components/projects/card';
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
