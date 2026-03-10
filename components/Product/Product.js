import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Utils
import formatter from '@utils/formatter';
// User
import { useUser } from '@firebase/useUser';
// Db
import { deleteProduct } from '@firebase/db';
// Components
import Button from '@components/Button/Button';


const Product = ({ product }) => {
  const { user } = useUser();

  const myLoader = () => {
    return product.url;
  }

  const whatsapp = `https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_NUMBER_WHATSAPP}`

  return (
  <>
    <div className="product-item">
      <figure className="product-image">
        <Image loader={myLoader} src={product.url} alt={product.name} layout="fill" objectFit="cover" />
      </figure>
      <div className="product-item-info">
        <h2 className="product-name">{product.name}</h2>
        <span className="product-price">{formatter.format(product.price)}</span>
        <p className="product-description">{product.description}</p>
      </div>
      <div className="product-footer">
        { user ? (
          <Button onClick={() => deleteProduct(product.id)} type="button">
            <i className="fas fa-trash" aria-hidden /> Eliminar
          </Button>
        ) : (
          <Link
            href={whatsapp}
            className="product-whatsapp-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp" aria-hidden />
            <span>Pedir por WhatsApp</span>
          </Link>
        )}
      </div>
    </div>
    <style jsx>
      {`
        .product-item {
          background: white;
          border-radius: var(--radius-md, 16px);
          overflow: hidden;
          box-shadow: var(--shadow-md, 0 4px 24px rgba(100, 0, 153, 0.10));
          border: 1px solid rgba(171, 62, 216, 0.15);
          transition: transform 400ms ease, box-shadow 400ms ease;
          display: flex;
          flex-direction: column;
        }

        .product-item:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-lg, 0 12px 40px rgba(100, 0, 153, 0.18));
        }

        .product-image {
          position: relative;
          height: 260px;
          width: 100%;
          overflow: hidden;
          background: var(--color-white, #f2f2f2);
        }

        .product-item-info {
          padding: 1.6rem;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          flex: 1;
        }

        .product-name {
          font-size: clamp(1.5rem, 2.5vw, 1.8rem);
          font-weight: 700;
          color: var(--color-five);
        }

        .product-price {
          font-size: clamp(1.4rem, 2.5vw, 1.6rem);
          font-weight: 800;
          color: var(--color-terciario);
        }

        .product-description {
          font-size: clamp(1.3rem, 2vw, 1.5rem);
          font-weight: 300;
          color: #555;
          line-height: 1.6;
          flex: 1;
        }

        .product-footer {
          padding: 1.2rem 1.6rem;
          border-top: 1px solid rgba(171, 62, 216, 0.10);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .product-footer :global(.product-whatsapp-link) {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          color: var(--color-terciario);
          text-decoration: none;
          font-size: 1.5rem;
          font-weight: 600;
          transition: transform 0.25s ease, color 0.25s ease;
        }

        .product-footer :global(.product-whatsapp-link i) {
          font-size: 2.2rem;
        }

        .product-footer :global(.product-whatsapp-link:hover) {
          transform: translateY(-2px);
          color: var(--color-secundary);
        }
      `}
    </style>
  </>
  )
};

export default Product;
