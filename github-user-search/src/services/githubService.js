import axios from 'axios';

const GITHUB_API_BASE = 'https://api.github.com';

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

    const response = await axios.get(`https://api.github.com/users/${username.trim()}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error('User not found');
    } else if (error.response && error.response.status === 403) {
      throw new Error('API rate limit exceeded');
    } else {
      throw new Error(error.message || 'Failed to fetch user data');
    }
  }
};