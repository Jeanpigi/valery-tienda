import React from 'react';

const Search = ({ search, searchInput, handleSearch }) => (
  <>
    <div className="search">
      <div className="search_input">
        <input
          id="search"
          type="text"
          value={search}
          ref={searchInput}
          onChange={handleSearch}
          placeholder="buscador de productos"
        />
      </div>
      <div className="search_icon">
        <i className="fas fa-search" aria-hidden/>
      </div>
    </div>
    <style jsx>
      {`
        .search {
          display: grid;
          grid-template-columns: 3.6fr 0.4fr;
          padding: 3rem 1rem 5rem 2rem;
        }

        .search_input input {
          padding: 1rem;
          width: 100%;
          border-radius: 4px;
          border: 2px solid var(--color-four);
          outline: none;
          box-shadow: 0 19px 38px rgba(0, 0, 0, 0.1), 0 15px 12px rgba(0, 0, 0, 0.1);
        }

        .search_icon {
          display: grid;
          justify-items: center;
          align-items: center;
          background-color: var(--color-four);
          border-top-right-radius: 10px;
          border-bottom-right-radius: 10px;
        }

        @media screen and (min-width: 766px) {
          .search {
            grid-template-columns: 3fr 0.2fr;
          }
        }

        @media screen and (min-width: 1023px) {
          .search {
            grid-template-columns: 3.6fr 0.1fr;
          }
        }
      `}
    </style>
  </>
);

export default Search;
