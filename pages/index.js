import React, { useState, useRef, useMemo, useCallback, useEffect } from 'react';
// components
import Product from '@components/Product/Product';
import Search from '@components/Search/Search';
// db
import { getAllProducts } from '@firebase/db';

import {useUser} from '@firebase/useUser'


const Home = () => {
  const { user, logout } = useUser();
  const [productList, setProductList] = useState([]);
  const [search, setSearch] = useState('');
  const searchInput = useRef(null);

  useEffect(() => {
    getAllProducts().then(setProductList);
  }, [])


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

  if(user) {
    return (
      <>
        <h1>{user.name}</h1>
        <h3>{user.email}</h3>
        <button onClick={() => logout()}>Log out</button>
      </>
    )
  }
  return (
    <>
      <div className="home">
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
