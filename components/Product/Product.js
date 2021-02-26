import React from 'react';
// import Image from 'next/image';

const Product = ({ product }) => {
    return (
        <>
            <div className="product-item">
                <img src={product.image} alt={product.title} />
                <div className="product-item-info">
                    <h2>
                        {product.title}
                        <span>
                            $ {''} {product.price}
                        </span>
                    </h2>
                    <p>{product.description}</p>
                </div>
            </div>
            <style jsx>
                {`
                .product-item {
                    text-decoration: none;
                    box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06),
                        1px 3px 8px rgba(39, 44, 49, 0.03);
                    transition: box-shadow .1s ease,transform .1s ease;
                    border-radius: 5px;
                    margin: 0 0 20px 0;
                    position: relative;
                }
                .product-item-info {
                    padding: 10px;
                }
                .product-item-info h2 {
                    font-size: 18px;
                    font-weight: bold;
                    display: flex;
                    justify-content: space-between;
                }
                .product-item-info p {
                    font-size: 14px;
                    font-weight: 300;
                }
                .product-item img {
                    width: 100%;
                    height: 200px;
                    border-radius: 5px 5px 0 0;
                    object-fit: contain;
                }
            `}
            </style>
        </>
    )
}

export default Product;
