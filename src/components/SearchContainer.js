import React from 'react';

const SearchContainer = (props) => {
  return (
    <div>
      <hr class="search-divider" />
      {props.children}
    </div>
  );
};

export default SearchContainer;
