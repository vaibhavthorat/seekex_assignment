import './App.css';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Main from './Component/main/Main';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './Component/ProductDetails';
import PageNotFound from './Component/PageNotFound';
import ScrollToTop from './Component/ScrollToTop';


function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
      <Routes>
        <Route exact path='productdetails' element={<ProductDetails></ProductDetails>}></Route>
        <Route exact path='/' element={<Main></Main>}></Route>
        <Route exact path='/home' element={<Main></Main>}></Route>
        <Route exact path='/seekex_assignment' element={<Main></Main>}></Route>
        <Route exact path="/productdetails/:id" element={<ProductDetails></ProductDetails>}></Route>
        <Route exact path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
        <Footer></Footer>
        <ScrollToTop />
    </div>
  );
}

export default App;
