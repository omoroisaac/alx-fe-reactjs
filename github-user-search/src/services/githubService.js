import axios from 'axios';

const GITHUB_API_BASE = 'https://api.github.com';

// Create axios instance for GitHub API
const githubAPI = axios.create({
  baseURL: GITHUB_API_BASE,
  headers: {
    'Accept': 'application/vnd.github.v3+json',
  },
});

/**
 * Advanced search for GitHub users with multiple criteria
 * @param {Object} searchParams - Search parameters
 * @param {string} searchParams.username - Username to search for
 * @param {string} searchParams.location - Location filter
 * @param {number} searchParams.minRepos - Minimum repositories
 * @param {number} searchParams.minFollowers - Minimum followers
 * @param {string} searchParams.language - Programming language
 * @param {number} page - Page number for pagination
 * @param {number} perPage - Results per page
 * @returns {Promise} - Search results from GitHub API
 */
export const advancedUserSearch = async (searchParams, page = 1, perPage = 10) => {
  try {
    let query = '';

    // Build the search query based on provided parameters
    if (searchParams.username) {
      query += `${searchParams.username} in:login `;
    }

    if (searchParams.location) {
      query += `location:${searchParams.location} `;
    }

    if (searchParams.minRepos) {
      query += `repos:>=${searchParams.minRepos} `;
    }

    if (searchParams.minFollowers) {
      query += `followers:>=${searchParams.minFollowers} `;
    }

    if (searchParams.language) {
      query += `language:${searchParams.language} `;
    }

    // Remove trailing space and encode the query
    query = query.trim();

    if (!query) {
      throw new Error('Please provide at least one search criteria');
    }

    const response = await githubAPI.get('/search/users', {
      params: {
        q: query,
        page: page,
        per_page: perPage,
        sort: 'followers',
        order: 'desc',
      },
    });

    return {
      users: response.data.items,
      totalCount: response.data.total_count,
      page: page,
      perPage: perPage,
      hasNextPage: response.data.items.length === perPage,
    };
  } catch (error) {
    if (error.response && error.response.status === 403) {
      throw new Error('API rate limit exceeded. Please try again later.');
    } else if (error.response && error.response.status === 422) {
      throw new Error('Invalid search parameters. Please check your inputs.');
    } else {
      throw new Error(error.message || 'Failed to search users');
    }
  }
};

/**
 * Get detailed user information
 * @param {string} username - GitHub username
 * @returns {Promise} - Detailed user data
 */
export const getUserDetails = async (username) => {
  try {
    const response = await githubAPI.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error('User not found');
    }
    throw new Error(error.message || 'Failed to fetch user details');
  }
};

/**
 * Get multiple users' details in batch
 * @param {Array} usernames - Array of GitHub usernames
 * @returns {Promise} - Array of user details
 */
export const getUsersDetailsBatch = async (usernames) => {
  try {
    const userPromises = usernames.map(username => getUserDetails(username));
    return await Promise.allSettled(userPromises);
  } catch (error) {
    throw new Error('Failed to fetch users details');
  }
};

export default githubAPI;