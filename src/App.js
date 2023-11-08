import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import SearchResultList from './components/SearchResultList';
import SearchService from './services/SearchService';
import './styles.css';

// Main component representing the entire application
const App = () => {
  // State to manage the search results
  const [results, setResults] = useState([]);

  // Function to handle the search operation
  const handleSearch = async (searchTerm) => {
    try {
      // Make an asynchronous call to the search service
      const searchResults = await SearchService.search(searchTerm);

      // Update the state with the obtained search results
      setResults(searchResults);
    } catch (error) {
      // Log any errors that occur during the search
      console.error(error.message);
    }
  };

  // Render the application UI
  return (
    <div className="container">
      <h1>User Search</h1>
      <div className="search-container">
        {/* Render the SearchForm component with the handleSearch callback */}
        <SearchForm onSearch={handleSearch} />
      </div>
      <h2>Search Results:</h2>
      {/* Render the SearchResultList component with the obtained search results */}
      <SearchResultList results={results} />
    </div>
  );
};

export default App;
