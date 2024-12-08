import Contetn from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {Cart} from './components/Cart'
import Delivery from "./components/Delivery";
import About from './components/About'
import "./App.css"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'




function App() {
  return (
    <div className="App">
      
      <Router>
      <Header></Header>
        <Routes>
          <Route path="/" element={<Contetn/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/delivery" element={<Delivery/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Router>
        <Footer></Footer>

    </div>
  );
}

export default App;
