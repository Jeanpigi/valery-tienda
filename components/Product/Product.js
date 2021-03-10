import React from 'react';
// import Image from 'next/image';

const Product = ({ product }) => (
  <>
    <div className="product-item">
      <figure className="product-image">
          <img src={product.image} alt={product.title} />
      </figure>
      <div className="product-item-info">
        <h2>{product.title}</h2>
        <span>Precio: ${product.price}</span>
        <p>{product.description}</p>
      </div>
    </div>
    <style jsx>
      {`
        .product-item {
          text-decoration: none;
          box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06),
            1px 3px 8px rgba(39, 44, 49, 0.03);
          transition: box-shadow 0.1s ease, transform 0.1s ease;
          margin: 0 0 2rem 0;
        }
        .product-image {
          padding: 2rem;
        }

        .product-image img {
          width: 100%;
          height: 200px;
          border-radius: 5px 5px 0 0;
          object-fit: contain;
        }

        .product-item-info {
          padding: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .product-item-info h2 {
          font-size: 1.6rem;
          font-weight: bold;
        }
        .product-item-info p {
          font-size: 1.4rem;
          font-weight: 400;
        }
      `}
    </style>
  </>
);

export default Product;
