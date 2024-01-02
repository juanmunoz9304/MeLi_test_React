import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { IProdudctDetails } from '../core/interfaces/IProductDetails';

const useProductsDetail = () => {
    const [productId, setProductId] = useState('');
    const [searchResults, setSearchResults] = useState<IProdudctDetails>();
    const location = useLocation();

    useEffect(() => {
        const pathSegments = location.pathname.split('/');
        const idFromUrl = pathSegments[pathSegments.length - 1];

        if (idFromUrl) {
            setProductId(idFromUrl);
        }

        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/items/${idFromUrl}`);
                const data = response.data;
                setSearchResults(data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, [location.pathname]);

    return { productId, searchResults };
};

export default useProductsDetail;
