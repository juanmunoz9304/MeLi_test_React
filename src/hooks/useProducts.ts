import React, { useState, useEffect, useLayoutEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { IProductList } from '../core/interfaces/IProductList';

const useProducts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<IProductList>();
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  useEffect(() => {
    const searchTermFromUrl = params.get('search');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
      fetchProductData();
    }
  }, [location.search]);

  useEffect(() => {    
    if (searchTerm.length > 2 && !searchResults && params.get('search')) {      
      fetchProductData();
    }
  }, [searchTerm]);

  const fetchProductData = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/items?search=${searchTerm}`);
      const data = response.data;
      setSearchResults(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const executeSearch = () => {
    params.set('search', encodeURIComponent(searchTerm));
    navigate(`items?${params.toString()}`);
  };

  const handleInputChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
  };

  return { searchTerm, searchResults, handleInputChangeSearch, executeSearch, setSearchTerm, setSearchResults };
};

export default useProducts;
