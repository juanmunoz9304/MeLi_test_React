import React, { useEffect, useLayoutEffect, useState } from 'react'
import { HomeComponent } from './homeComponent';
import { BreadcrumbsCompo } from '../../components/breadcrumbs/breadcrumbsCompo';
import { IProductList } from '../../core/interfaces/IProductList';
import { useLocation, useNavigate } from 'react-router-dom';
import LandingComponent from '../landing/landingComponent';

export interface IHomeContainer {
  productResults : IProductList;
  setAuxCategories : React.Dispatch<React.SetStateAction<string>>;
  auxCategories : string;
}

export const HomeContainer: React.FC<IHomeContainer> = ({
  productResults,
  auxCategories,
  setAuxCategories
}) => {
  const location = useLocation();

  const navigate = useNavigate();


  useEffect(() => {
    if(productResults?.items){
      const params = new URLSearchParams(location.search);
      setAuxCategories(params.get('search') || '');
    }    
  },[productResults]);

  const goToProductDetails = (idProduct: string) => {
    const newParams = new URLSearchParams();
    newParams.set('id', idProduct);
    navigate(`/items/${idProduct}`);
  }
  

  return (
    <>
    {
      productResults &&
      <BreadcrumbsCompo items={productResults?.categories.length ? productResults.categories : [auxCategories]} />
    }
    {
      productResults &&
      <HomeComponent productItemInfo={productResults || []} goToProductDetails={goToProductDetails} />
    }
    {
      !productResults &&
      <LandingComponent />
    }
    </>
  )
}
