// import logo from './logo.svg';
import './App.css';
import Home from './home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Product from './product';
import OnePlusNord from './OnePlusNord';
import ContactUs from './Contact';


function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/products' element={<Product/>}></Route>
          <Route path='/contact' element={<ContactUs />}></Route>
          <Route path='/OnePlusNord' element={<OnePlusNord />}></Route>
          <Route path='/products/OnePlusNord' element={<OnePlusNord />}></Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;
