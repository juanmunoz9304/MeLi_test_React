import React from 'react'

interface iLocalProduct {
  picture: string;
  description: string;
  newLabel: string;
  title: string;
  price: number;
  currency: string;
}

export const ProductComponent: React.FC<iLocalProduct> = ({
  picture,
  description,
  newLabel,
  title,
  price,
  currency
}) => {

  const priceFormatter = (price: number, currency: string) => {
    const formattedPrice = new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: currency
    }).format(price);

    return formattedPrice.toString();
}

  return (
    <div className='product-detail-container'>
      <div className='column section1'>
        <img src={picture} className='image-product-detail' alt="test-ml" />
        <div className='descript-product'>
          <p className='title-desc'>
            Descripción del producto
          </p>
          <p className='desc-product'>{description}</p>
        </div>
      </div>
      <div className='column section2'>
        <p className='prod-new-text'>{newLabel === "new" ? 'Nuevo' : 'Usado'}</p>
        <p className='product-title'>{title}</p>
        <p className='product-price'>{`$ ${priceFormatter(price, currency).replace(currency, "")}`}</p>
        <button className='product-buy-button hand'>Comprar</button>
      </div>

    </div>
  )
}

