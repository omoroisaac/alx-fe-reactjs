import axios from 'axios';

// Get configuration from environment variables
const GITHUB_API_BASE = import.meta.env.VITE_GITHUB_API_BASE || 'https://api.github.com';
const GITHUB_API_TOKEN = import.meta.env.VITE_GITHUB_API_TOKEN;

// Create axios instance with common config
const githubAPI = axios.create({
  baseURL: GITHUB_API_BASE,
  headers: {
    'Accept': 'application/vnd.github.v3+json',
    ...(GITHUB_API_TOKEN && {
      'Authorization': `token ${GITHUB_API_TOKEN}`
    })
  },
});

// GitHub API base URL
const GITHUB_API_BASE = 'https://api.github.com';

// Create axios instance with common config
const githubAPI = axios.create({
  baseURL: GITHUB_API_BASE,
  headers: {
    'Accept': 'application/vnd.github.v3+json',
  },
});

// Search users function
export const searchUsers = async (query, page = 1, perPage = 10) => {
  try {
    const response = await githubAPI.get('/search/users', {
      params: {
        q: query,
        page: page,
        per_page: perPage,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error searching users:', error);
    throw error;
  }
};

// Get user details function
export const getUserDetails = async (username) => {
  try {
    const response = await githubAPI.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error;
  }
};

export default githubAPI;