import { useState } from 'react';
import { advancedUserSearch, getUsersDetailsBatch } from '../services/githubService';

const AdvancedSearch = () => {
  const [searchParams, setSearchParams] = useState({
    username: '',
    location: '',
    minRepos: '',
    minFollowers: '',
    language: '',
  });
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e, page = 1) => {
    e.preventDefault();
    
    // Check if at least one field is filled
    const hasSearchCriteria = Object.values(searchParams).some(value => value !== '');
    if (!hasSearchCriteria) {
      setError('Please provide at least one search criteria');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const result = await advancedUserSearch(searchParams, page, 9);
      
      // Get detailed information for each user
      const detailedUsers = await getUsersDetailsBatch(result.users.map(user => user.login));
      
      const successfulUsers = detailedUsers
        .filter(result => result.status === 'fulfilled')
        .map(result => result.value);

      if (page === 1) {
        setUsers(successfulUsers);
      } else {
        setUsers(prev => [...prev, ...successfulUsers]);
      }
      
      setTotalCount(result.totalCount);
      setHasNextPage(result.hasNextPage);
      setCurrentPage(page);
    } catch (err) {
      setError(err.message);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    handleSubmit(new Event('submit'), currentPage + 1);
  };

  const handleReset = () => {
    setSearchParams({
      username: '',
      location: '',
      minRepos: '',
      minFollowers: '',
      language: '',
    });
    setUsers([]);
    setError('');
    setCurrentPage(1);
    setTotalCount(0);
  };

  const popularLanguages = [
    'JavaScript', 'Python', 'Java', 'TypeScript', 'C++', 'C#', 'PHP', 
    'Ruby', 'Go', 'Rust', 'Swift', 'Kotlin', 'R', 'Scala'
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          GitHub User Search
        </h1>
        <p className="text-lg text-gray-600">
          Find GitHub users with advanced filters and criteria
        </p>
      </div>

      {/* Search Form */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Basic Search */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={searchParams.username}
                onChange={handleInputChange}
                placeholder="e.g., octocat"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={searchParams.location}
                onChange={handleInputChange}
                placeholder="e.g., San Francisco"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          {/* Advanced Filters Toggle */}
          <div className="pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
            >
              <span>Advanced Filters</span>
              <svg 
                className={`w-4 h-4 ml-2 transform transition-transform duration-200 ${showAdvanced ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Advanced Filters */}
          {showAdvanced && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 animate-fade-in">
              <div>
                <label htmlFor="minRepos" className="block text-sm font-medium text-gray-700 mb-2">
                  Minimum Repositories
                </label>
                <input
                  type="number"
                  id="minRepos"
                  name="minRepos"
                  value={searchParams.minRepos}
                  onChange={handleInputChange}
                  placeholder="e.g., 10"
                  min="0"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="minFollowers" className="block text-sm font-medium text-gray-700 mb-2">
                  Minimum Followers
                </label>
                <input
                  type="number"
                  id="minFollowers"
                  name="minFollowers"
                  value={searchParams.minFollowers}
                  onChange={handleInputChange}
                  placeholder="e.g., 100"
                  min="0"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-2">
                  Programming Language
                </label>
                <select
                  id="language"
                  name="language"
                  value={searchParams.language}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Any language</option>
                  {popularLanguages.map(lang => (
                    <option key={lang} value={lang}>{lang}</option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 focus:ring-4 focus:ring-blue-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Searching...
                </div>
              ) : (
                'Search Users'
              )}
            </button>
            
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 transition-all duration-200"
            >
              Reset
            </button>
          </div>
        </form>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg mb-6 animate-fade-in">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            {error}
          </div>
        </div>
      )}

      {/* Results Header */}
      {users.length > 0 && (
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Search Results
          </h2>
          <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
            {totalCount.toLocaleString()} users found
          </span>
        </div>
      )}

      {/* Users Grid */}
      {users.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden"
            >
              <div className="p-6">
                {/* User Header */}
                <div className="flex items-start space-x-4 mb-4">
                  <img
                    src={user.avatar_url}
                    alt={`${user.login}'s avatar`}
                    className="w-16 h-16 rounded-full border-2 border-blue-200 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 truncate">
                      {user.name || user.login}
                    </h3>
                    <p className="text-gray-600 text-sm truncate">@{user.login}</p>
                    {user.location && (
                      <p className="text-gray-500 text-sm flex items-center mt-1">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {user.location}
                      </p>
                    )}
                  </div>
                </div>

                {/* User Bio */}
                {user.bio && (
                  <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                    {user.bio}
                  </p>
                )}

                {/* User Stats */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="text-center p-2 bg-gray-50 rounded-lg">
                    <div className="font-bold text-gray-900">{user.public_repos}</div>
                    <div className="text-xs text-gray-600">Repos</div>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded-lg">
                    <div className="font-bold text-gray-900">{user.followers}</div>
                    <div className="text-xs text-gray-600">Followers</div>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded-lg">
                    <div className="font-bold text-gray-900">{user.following}</div>
                    <div className="text-xs text-gray-600">Following</div>
                  </div>
                </div>

                {/* Action Button */}
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 text-white text-center py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 block"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Load More Button */}
      {hasNextPage && users.length > 0 && (
        <div className="text-center mb-8">
          <button
            onClick={handleLoadMore}
            disabled={loading}
            className="bg-white border border-gray-300 text-gray-700 py-3 px-8 rounded-lg font-medium hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 inline-flex items-center"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin mr-2"></div>
                Loading...
              </>
            ) : (
              'Load More Users'
            )}
          </button>
        </div>
      )}

      {/* Empty State */}
      {!loading && users.length === 0 && !error && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <svg className="w-24 h-24 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            No users found
          </h3>
          <p className="text-gray-500">
            Try adjusting your search criteria to find GitHub users
          </p>
        </div>
      )}
    </div>
  );
};

export default AdvancedSearch;