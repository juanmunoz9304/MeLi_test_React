import React from 'react'
import freeShippingIcon from '../../Assets/ic_shipping.png';

interface ILocalProduct {
    idProduct:string;
    picture: string;
    title: string;
    price: number;
    city: string;
    freeShipping: boolean;
    currency: string;
    //Methods
    goToProductDetails(idProduct: string):void;
}

export const ProductItemCompo: React.FC<ILocalProduct> = ({
    idProduct,
    picture,
    title,
    price,
    city,
    freeShipping,
    currency,
    goToProductDetails
}) => {


    const priceFormatter = (price: number, currency: string) => {
        const formattedPrice = new Intl.NumberFormat('es-ES', {
            style: 'currency',
            currency: currency
        }).format(price);

        return formattedPrice.toString();
    }


    return (
        <>
            <div className='product-item-container hand' onClick={() => goToProductDetails(idProduct)}>
                <img src={picture} className='item-picture' alt={picture || 'no-pic'} />
                <div className='product-item-info'>
                    <div className='row'>
                        <p className='item-price'>{`$ ${priceFormatter(price, currency).replace(currency, "")}`}</p>
                        {
                            freeShipping && <img src={freeShippingIcon} className='freeShipping-icon' alt="free-shipping" />
                        }
                    </div>
                    <p className='item-title'>{title}</p>
                </div>
                <p className='product-item-city'>{city}</p>
            </div>
            <div className='product-line'></div>
        </>
    )
}
