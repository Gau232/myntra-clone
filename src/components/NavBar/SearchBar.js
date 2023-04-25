import React, { useState } from "react";

const SearchBar = ({ searchTerm, handleSearch }) => {

  // const handleSearch = (event) => {
  //   setSearchTerm(event.target.value);
  //   const filteredProducts = products.filter((product) =>
  //     product.brand?.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     product.title?.toLowerCase().includes(searchTerm.toLowerCase()) 
  //   );
  //   setFilteredProducts(filteredProducts);
  // };

  return (
    <>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        className="navBar-search"
        placeholder="Search for products, brands and more"
      />
    </>
  );
};

export default SearchBar;
