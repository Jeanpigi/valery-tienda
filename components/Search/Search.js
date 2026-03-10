import React from 'react';

const Search = ({ search, searchInput, handleSearch }) => (
  <>
    <div className="search">
      <div className="search_wrapper">
        <i className="fas fa-search search_icon_inner" aria-hidden />
        <input
          id="search"
          type="text"
          value={search}
          ref={searchInput}
          onChange={handleSearch}
          placeholder="Buscar productos..."
          aria-label="Buscar productos"
        />
      </div>
    </div>
    <style jsx>
      {`
        .search {
          padding: 2.4rem 2rem 3.2rem;
          display: flex;
          justify-content: center;
        }

        .search_wrapper {
          display: flex;
          align-items: center;
          width: 100%;
          max-width: 560px;
          background: white;
          border: 2px solid var(--color-four);
          border-radius: 50px;
          overflow: hidden;
          padding: 0 1.8rem;
          box-shadow: 0 4px 20px rgba(100, 0, 153, 0.10);
          transition: box-shadow 0.25s ease;
        }

        .search_wrapper:focus-within {
          box-shadow: 0 4px 24px rgba(100, 0, 153, 0.22);
        }

        .search_icon_inner {
          color: var(--color-four);
          font-size: 1.6rem;
          flex-shrink: 0;
          margin-right: 1.2rem;
        }

        .search_wrapper input {
          flex: 1;
          padding: 1.2rem 0;
          border: none;
          outline: none;
          font-size: 1.5rem;
          font-family: 'Open Sans', sans-serif;
          background: transparent;
          color: var(--color-five);
        }

        .search_wrapper input::placeholder {
          color: #bbb;
        }
      `}
    </style>
  </>
);

export default Search;
