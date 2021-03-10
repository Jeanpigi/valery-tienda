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
          padding: 5rem 1rem 2rem 2rem;
        }

        .search_input input {
          padding: 1rem;
          width: 100%;
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
        }

        .search_icon {
          display: grid;
          justify-items: center;
          align-items: center;
          background-color: #b55bb8;
          border-top-right-radius: 10px;
          border-bottom-right-radius: 10px;
        }
      `}
    </style>
  </>
);

export default Search;
