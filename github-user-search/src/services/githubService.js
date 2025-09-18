// src/services/githubService.js
import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';

// Create axios instance with default config
const api = axios.create({
  baseURL: GITHUB_API_URL,
  timeout: 10000,
  headers: {
    'Accept': 'application/vnd.github.v3+json',
  }
});

export const fetchUserData = async (username) => {
  try {
    const response = await api.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      // Server responded with error status
      switch (error.response.status) {
        case 404:
          throw new Error('User not found. Please check the username and try again.');
        case 403:
          throw new Error('Rate limit exceeded. Please try again later.');
        default:
          throw new Error('Failed to fetch user data. Please try again.');
      }
    } else if (error.request) {
      // Request made but no response received
      throw new Error('Network error. Please check your internet connection.');
    } else {
      // Something else happened
      throw new Error('An unexpected error occurred. Please try again.');
    }
  }
};