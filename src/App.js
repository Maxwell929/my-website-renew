import logo from './logo.svg';
import './App.css';
import Header from "../src/components/Header/header";
import Navbar from './components/Navbar/nav';
import About from './components/about/about';
import Cards from './components/projects/card';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Header></Header>
      <About></About>
      <Cards></Cards>
    </div>
  );
}

export default App;
