import React, { useState } from 'react';


const SearchForm = ({ onSearch }) => {
  // State to manage the search term input
  const [searchTerm, setSearchTerm] = useState('');

  /**
   * Handles the search button click.
   * Validates the search term and initiates the search callback.
   */
  const handleSearch = () => {
    // Validate if searchTerm is not empty
    if (!searchTerm.trim()) {
      alert('Please enter a search term');
      return;
    }

    // If valid, proceed with the onSearch callback
    onSearch(searchTerm);
  };

  return (
    <div>
      {/* Input for entering the search term */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Button to trigger the search */}
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchForm;
