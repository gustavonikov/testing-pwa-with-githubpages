import React from 'react';

const SearchContainer = ({ children }) => {
  return (
    <div>
      <hr class="search-divider" />
      {children}
    </div>
  );
};

export default SearchContainer;
