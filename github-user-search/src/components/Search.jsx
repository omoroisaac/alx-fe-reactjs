import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!username.trim()) {
      setError('Please enter a GitHub username');
      return;
    }

    setLoading(true);
    setError('');
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setUsername('');
    setUserData(null);
    setError('');
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="input-group">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username (e.g., octocat)"
            className="search-input"
            disabled={loading}
          />
          <button 
            type="submit" 
            className="search-button"
            disabled={loading || !username.trim()}
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>
      </form>

      {/* Loading State */}
      {loading && (
        <div className="state-message loading">
          <div className="spinner"></div>
          <p>Loading user data...</p>
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div className="state-message error">
          <p>🚫 {error}</p>
          {error === 'User not found' && (
            <p className="error-hint">Looks like we can't find the user. Please check the username and try again.</p>
          )}
          <button onClick={handleReset} className="reset-button">
            Try Again
          </button>
        </div>
      )}

      {/* Success State - User Data Display */}
      {userData && !loading && !error && (
        <div className="user-card">
          <div className="user-header">
            <img 
              src={userData.avatar_url} 
              alt={`${userData.login}'s avatar`}
              className="user-avatar"
            />
            <div className="user-basic-info">
              <h2 className="user-name">
                {userData.name || userData.login}
              </h2>
              <p className="user-login">@{userData.login}</p>
              {userData.bio && (
                <p className="user-bio">{userData.bio}</p>
              )}
            </div>
          </div>

          <div className="user-stats">
            <div className="stat">
              <strong>{userData.public_repos}</strong>
              <span>Repositories</span>
            </div>
            <div className="stat">
              <strong>{userData.followers}</strong>
              <span>Followers</span>
            </div>
            <div className="stat">
              <strong>{userData.following}</strong>
              <span>Following</span>
            </div>
          </div>

          <div className="user-details">
            {userData.location && (
              <p className="detail">📍 {userData.location}</p>
            )}
            {userData.company && (
              <p className="detail">🏢 {userData.company}</p>
            )}
            {userData.blog && (
              <p className="detail">
                🌐 <a href={userData.blog} target="_blank" rel="noopener noreferrer">
                  {userData.blog}
                </a>
              </p>
            )}
            {userData.twitter_username && (
              <p className="detail">
                🐦 @{userData.twitter_username}
              </p>
            )}
          </div>

          <div className="user-actions">
            <a 
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="profile-link"
            >
              View GitHub Profile
            </a>
            <button onClick={handleReset} className="reset-button">
              Search Another User
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;