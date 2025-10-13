import AdvancedSearch from './components/AdvancedSearch';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <AdvancedSearch />
      
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="text-center text-gray-600">
            <p className="mb-2">Built with React, Tailwind CSS & GitHub API</p>
            <p className="text-sm text-gray-500">
              Search and discover amazing developers on GitHub
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;