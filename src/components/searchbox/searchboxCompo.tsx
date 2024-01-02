import React, { useEffect, useState } from 'react'
import logoML from '../../Assets/Logo_ML.png';
import lensSearchIcon from '../../Assets/ic_Search.png';
import useProducts from '../../hooks/useProducts';
import { IProductList } from '../../core/interfaces/IProductList';
import { useLocation, useNavigate } from 'react-router-dom';

interface IOutputsSearchbox {
  setProductResults: React.Dispatch<React.SetStateAction<IProductList | undefined>>;
}

export const SearchboxCompo: React.FC<IOutputsSearchbox> = ({
  setProductResults
}) => {
  const {executeSearch, handleInputChangeSearch, searchResults, searchTerm, setSearchTerm, setSearchResults} = useProducts();
  setProductResults(searchResults);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && searchTerm.length > 2) {
      executeSearch();
    }
  };

  const goHome = () => {
    navigate('/');
    setSearchTerm('');
    setSearchResults(undefined);
  }

  return (
    <div className='panel-search-container'>
        <img src={logoML} className='logo-global icon-searchbox hand' onClick={goHome} alt="meli-icon" />
        <div className='search-box'>
            <input className='searchbox-input' 
              onChange={handleInputChangeSearch} 
              value={searchTerm} 
              onKeyDown={handleKeyDown} 
              placeholder='Nunca dejes de buscar' 
              type="text" 
            />
            <button className='search-button hand' onClick={searchTerm.length > 2 ? executeSearch : () => {}}>
              <img src={lensSearchIcon} className='icon-search-button' alt="search" />
            </button>
        </div>
    </div>
  )
}
