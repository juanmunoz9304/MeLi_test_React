import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomeContainer } from './pages/home/homeContainer';
import { ProductContainer } from './pages/product/productContainer';
import { SearchboxCompo } from './components/searchbox/searchboxCompo';
import './styles.scss';

const App: React.FC = () => {

  const [productResults, setProductResults] = useState<any>(); //Evitando complejizar con redux
  const [auxCategories, setAuxCategories] = useState<string>('');

  return (
    <Router>
      <SearchboxCompo setProductResults={setProductResults} />
      <div className='general-container'>
        <div className='gridly'>
          <Routes>
            <Route path='/' element={<HomeContainer productResults={productResults} auxCategories={auxCategories} setAuxCategories={setAuxCategories} />}/>
            <Route path='/items' element={<HomeContainer productResults={productResults} auxCategories={auxCategories} setAuxCategories={setAuxCategories} />} />
            <Route path='/items/:id' element={<ProductContainer productResults={productResults} auxCategories={auxCategories} setAuxCategories={setAuxCategories} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
