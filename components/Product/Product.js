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
        <Image loader={myLoader} src={product.url} alt={product.name} width={250}
          height={250} />
      </figure>
      <div className="product-item-info">
        <h2>{product.name}</h2>
        <span>{formatter.format(product.price)}</span>
        <p>{product.description}</p>
      </div>
      { user ? 
      <div className="product-button">
            <Button onClick={() => deleteProduct(product.id)} type="button"> <i className="fas fa-trash" aria-hidden /> </Button>
      </div>
      
      :
          <div className="product-whatsapp">
            <Link href={whatsapp}>
              <a target="_blank" rel="noopener">
                <i className="fab fa-whatsapp" aria-hidden />
              </a>
            </Link>
          </div>
      }
    </div>
    <style jsx>
      {`
        .product-item {
          box-shadow: 10px 10px 15px rgba(39, 44, 49, 0.06),
            -10px 10px 15px rgba(39, 44, 49, 0.03);
          margin-bottom: 2rem;
          border: none;
          border-radius: 20px;
          padding: 1rem;
          border: 1px solid var(--color-valery);
          color: var(--color-four);

          transition: transform 500ms ease;
        }

        .product-item:hover {
          transform: scale(1.03);
        }

        .product-image {
          padding: 1rem;
          display: flex;
          justify-content: center;
        }

        .product-item-info {
          padding: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .product-item-info h2 {
          font-size: clamp(1.5rem, 2.5vw, 1.8rem);
          font-weight: bold;
          text-align: center;
        }

        .product-item-info span {
          font-size: clamp(1.3rem, 2.5vw, 1.5rem);
          font-weight: 200;
        }

        .product-item-info span::before {
          content: "Precio: $";
        }

        .product-item-info p {
          font-size: clamp(1.4rem, 2.5vw, 1.7rem);
          font-weight: 300;
          text-align: justify;
        }

        .product-button {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .product-whatsapp {
          display: flex;
          justify-content: center;
          align-items: center;
          
        }

        .product-whatsapp  a {
            color: var(--color-terciario);
            font-size: clamp(1.4rem, 2.5vw, 3.6rem);
            text-decoraton: none;

            transition: transform 0.4s ease-in-out;
        }

        .product-whatsapp a:hover, .product-whatsapp a:focus {
            transform: translateY(-5px);
            color: var(--color-secundary);
        }

      `}
    </style>
  </>
  )
};

export default Product;
