// Constants for API configuration
const APIKEY = '2Q5pNxniuHEguKQSnGEyGtmcNxCgQg4hpWsjoPzOySNhv2Kwpy';
const SECRET = 'SxKnN6hQkucKBjoDtZY92FbiYQ8nHSBYDjKCc1YH';

// API endpoints for authentication and animal searches
const TOKEN_ENDPOINT = 'https://api.petfinder.com/v2/oauth2/token';
const ANIMALS_ENDPOINT = 'https://api.petfinder.com/v2/animals';

/**
 * Gets an access token from the PetFinder API using client credentials flow.
 * This token is required for all other API requests.
 *
 * @returns {Promise<string>} A promise that resolves to the access token
 * @throws {Error} If the token request fails
 */

async function getAccessToken() {
  try {
    // Make POST request to get the access token
    const response = await fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      // The body must be in x-www-form-urlencoded format as per OAuth2 spec
      body: `grant_type=client_credentials&client_id=${APIKEY}&client_secret=${SECRET}`,
    });

    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`Token request failed with status: ${response.status}`);
    }

    // Parse the response and extract the access token
    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error('Error getting access token:', error);
    throw error; // Re-throw to handle it in the calling function
  }
}

/**
 * Searches for pets using the PetFinder API.
 *
 * @param {string} zipCode - The ZIP code to search in
 * @param {number} [page=1] - The page number for pagination
 * @param {Object} [filters] - Optional filters for the search
 * @returns {Promise<Object>} A promise that resolves to the search results
 * @throws {Error} If the search request fails
 */

async function searchPets(zipCode, page = 1, filters = {}) {
  try {
    // Get a fresh access token for this request
    const accessToken = await getAccessToken();

    // Build the query string with the ZIP code and page number
    let queryParams = new URLSearchParams({
      location: zipCode,
      page: page,
      limit: 20, // Number of results per page
      ...filters, // Spread any additional filters
    }).toString();

    // Make the GET request to search for animals
    const response = await fetch(`${ANIMALS_ENDPOINT}?{queryParams}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`Pet search failed with status: ${response.status}`);
    }

    // Parse and return the response data
    const data = await response.json();

    // Transform the data to include only what we need
    return {
      pets: data.animals,
      pagination: data.pagination,
      total: data.pagination.total_count,
    };
  } catch (error) {
    console.error('Error searching for pets:', error);
    throw error; // Re-throw to handle it in the calling component
  }
}

/**
 * Get details for a specific pet by their ID
 *
 * @param {string|number} petId - The ID of the pet to look up
 * @returns {Promise<Object>} A promise that resolves to the pet's details
 * @throws {Error} If the request fails
 */

async function getPetDetails(petId) {
  try {
    const accessToken = await getAccessToken();

    const response = await fetch(`${ANIMALS_ENDPOINT}/${petId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(
        `Pet details request failed with status: ${response.status}`
      );
    }

    const data = await response.json();
    return data.animal;
  } catch (error) {
    console.error(`Error getting details for pet ${petId}:`, error);
    throw error;
  }
}

export { searchPets, getPetDetails };
