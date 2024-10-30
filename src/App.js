import Contetn from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {Cart} from './components/Cart'
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
        </Routes>
      </Router>
        <Footer></Footer>

    </div>
  );
}

export default App;
