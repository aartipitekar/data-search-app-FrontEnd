import api from './api';

// Function to perform a search using the provided search term
const search = async (searchTerm) => {
  try {
    // Make a GET request to the API endpoint with the search term
    const response = await api.get(`/search?searchTerm=${searchTerm}`);

    // Log the response data (for debugging purposes)
    console.log(response.data);

    // Return the data obtained from the API response
    return response.data;
  } catch (error) {
    // If an error occurs during the API request, throw an error
    throw new Error(`Error fetching search results: ${error.message}`);
  }
};

export default { search };
