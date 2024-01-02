import React from 'react'
import { ProductComponent } from './productComponent'
import { BreadcrumbsCompo } from '../../components/breadcrumbs/breadcrumbsCompo'
import useProductsDetail from '../../hooks/useProductsDetails'
import { IHomeContainer } from '../home/homeContainer'

export const ProductContainer : React.FC<IHomeContainer> = ({
  productResults,
  auxCategories
}) => {

  const {searchResults} = useProductsDetail();
  return (
    <>
      <BreadcrumbsCompo items={productResults?.categories ? productResults.categories : [auxCategories]} />
      <ProductComponent 
        picture={searchResults?.item.picture || ''}
        description={searchResults?.item.description || 'No tiene descripción adjunta'}
        newLabel={searchResults?.item.condition || ''}
        title={searchResults?.item.title || ''}
        currency={searchResults?.item.price.currency || 'ARS'}
        price={searchResults?.item.price.amount || 0}
      />
    </>
  )
}
