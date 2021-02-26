import React, {
  useState, useRef, useMemo, useCallback,
} from 'react';
import fetch from 'isomorphic-unfetch';
// components
import Product from '@components/Product/Product';
import Search from '@components/Search/Search';

export const getServerSideProps = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();

  return {
    props: {
      productList: data,
    },
  };
};

const Home = ({ productList }) => {
  const [search, setSearch] = useState('');
  const searchInput = useRef(null);

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);

  const filteredProducts = useMemo(
    () => productList.filter((product) => product.title.toLowerCase().includes(search.toLowerCase())),
    [productList, search],
  );

  return (
    <>
      <div className="home">
        <Search search={search} searchInput={searchInput} handleSearch={handleSearch} />
        <div className="products">
          {filteredProducts.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
      <style jsx>
        {`
                    .products {
                        grid-template-columns: repeat(3, 1fr);
                        grid-gap: 1.5rem;
                        grid-row-gap: 1.5em;
                        display: grid;
                    }
                `}
      </style>
    </>
  );
};

export default Home;
