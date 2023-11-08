import React from 'react';

const SearchResultList = ({ results }) => (
  <div>
    {/* Check if there are results to display */}
    {results.length > 0 ? (
      // Display a list of user information
      <ul>
        {results.map((user) => (
          <li key={user.id}>
            {/* Display user information: First Name, Last Name, Email */}
            {user.firstName} {user.lastName} - {user.email}
          </li>
        ))}
      </ul>
    ) : (
      // If no results, display a message
      <p>No results found.</p>
    )}
  </div>
);

export default SearchResultList;
