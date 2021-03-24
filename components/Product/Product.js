import React from 'react';
import Image from 'next/image';
// Utils
import formatter from '@utils/formatter';

const Product = ({ product }) => {
  const myLoader = () => {
    return product.url;
  }

  return (
  <>
    <div className="product-item">
      <figure className="product-image">
        <Image loader={myLoader} src={product.url} alt={product.name} width={250}
          height={250} />
      </figure>
      <div className="product-item-info">
        <h2>{product.name}</h2>
        <span>Precio: $ {formatter.format(product.price)}</span>
        <p>{product.description}</p>
      </div>
    </div>
    <style jsx>
      {`
        .product-item {
          box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06),
            1px 3px 8px rgba(39, 44, 49, 0.03);
          margin: 0 0 2rem 0;
          border: none;
          border-radius: 5px;
        }
        .product-image {
          padding: 1rem;
          display: grid;
          justify-content: center;
        }

        .product-item-info {
          padding: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
      `}
    </style>
  </>
  )
};

export default Product;
