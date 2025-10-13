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
 * Fetch user data from GitHub API
 * @param {string} username - GitHub username to search for
 * @returns {Promise} - User data from GitHub API
 */
export const fetchUserData = async (username) => {
  try {
    if (!username || username.trim() === '') {
      throw new Error('Username cannot be empty');
    }

    const response = await githubAPI.get(`/users/${username.trim()}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error('User not found');
    } else if (error.response && error.response.status === 403) {
      throw new Error('API rate limit exceeded. Please try again later.');
    } else {
      throw new Error(error.message || 'Failed to fetch user data');
    }
  }
};

export default githubAPI;