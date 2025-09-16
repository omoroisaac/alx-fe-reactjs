// src/services/githubApi.js
import axios from 'axios';

const GITHUB_API_URL = process.env.REACT_APP_GITHUB_API_URL || 'https://api.github.com';

// Create axios instance with default config
const githubApi = axios.create({
  baseURL: GITHUB_API_URL,
  headers: {
    'Accept': 'application/vnd.github.v3+json',
  },
  timeout: 10000, // 10 second timeout
});

// Add authentication if token is provided
if (process.env.REACT_APP_GITHUB_ACCESS_TOKEN) {
  githubApi.defaults.headers.common['Authorization'] = `token ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`;
}

// Add request interceptor for error handling
githubApi.interceptors.request.use(
  (config) => {
    console.log(`Making API request to: ${config.url}`);
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for error handling
githubApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Server responded with error status
      console.error('API Error:', error.response.status, error.response.data);
    } else if (error.request) {
      // Request made but no response received
      console.error('Network Error:', error.request);
    } else {
      // Something else happened
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export const searchUsers = async (query) => {
  try {
    const response = await githubApi.get('/search/users', {
      params: { 
        q: query,
        per_page: 10
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserDetails = async (username) => {
  try {
    const response = await githubApi.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserRepos = async (username) => {
  try {
    const response = await githubApi.get(`/users/${username}/repos`, {
      params: {
        sort: 'updated',
        per_page: 5
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};