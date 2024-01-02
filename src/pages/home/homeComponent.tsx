import React from 'react'
import { ProductItemCompo } from '../../components/productItem/productItemCompo'
import { IProductList } from '../../core/interfaces/IProductList';

interface IHomeCompo {
  productItemInfo: IProductList;
  goToProductDetails(idProduct: string): void;

}

export const HomeComponent: React.FC<IHomeCompo> = ({
  productItemInfo,
  goToProductDetails
}) => {
  return (
    <>
      {
        productItemInfo.items.length
          ?
          productItemInfo.items.slice(0, 4).map((item, index) => (
            <ProductItemCompo
              key={index}
              idProduct={item.id}
              picture={item.picture}
              title={item.title}
              city={'ciudad'}
              freeShipping={item.free_shipping}
              price={item.price.amount}
              currency={item.price.currency}
              goToProductDetails={goToProductDetails}
            />
          ))
          :
          <div className="spinner"></div>
      }
    </>
  )
}

