import React, { useState, useRef, useMemo, useCallback } from 'react';
import fetch from 'isomorphic-unfetch';
// components
import Product from '@components/Product/Product';
import Search from '@components/Search/Search';
import Profile from '@components/Profile/Profile';
import Welcome from '@components/Welcome/Welcome';
// User
import { useUser } from '@firebase/useUser';

export const getServerSideProps = async () => {
  const API = 'http://localhost:3000/api/products' || '/api/products';
  const response = await fetch(API);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      productList: data,
    },
  }
}

const Home = ({ productList }) => {
  const { user, logout } = useUser();
  const [search, setSearch] = useState('');
  const searchInput = useRef(null);

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);

  const filteredProducts = useMemo(
    () =>
      productList.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      ),
    [productList, search]
  );

  return (
    <>
      <div className="home">
        {user ? <Profile user={user} logout={logout} /> : <Welcome />}

        <Search
          search={search}
          searchInput={searchInput}
          handleSearch={handleSearch}
        />
        <div className="products">
          {filteredProducts.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
      <style jsx>
        {`
          .products {
            margin: 0 2rem;
          }

          @media screen and (min-width: 766px) {
            .products {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 1rem;
            }
          }

          @media screen and (min-width: 1023px) {
            .home {
              margin: 0 4rem;
            }

            .products {
              grid-template-columns: repeat(3, 1fr);
            }
          }
        `}
      </style>
    </>
  );
};

export default Home;
