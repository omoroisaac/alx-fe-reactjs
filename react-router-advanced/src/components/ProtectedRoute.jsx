import React from "react";
import { Navigate } from "react-router-dom";

// Custom hook for authentication
function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const login = (cb) => {
    setIsAuthenticated(true);
    cb?.();
  };

  const logout = (cb) => {
    setIsAuthenticated(false);
    cb?.();
  };

  return { isAuthenticated, login, logout };
}

// ProtectedRoute component
export default function ProtectedRoute({ children }) {
  const auth = useAuth();

  // For demo purposes, you can log the auth state
  // console.log(auth.isAuthenticated);

  return auth.isAuthenticated ? children : <Navigate to="/login" />;
}

// Export useAuth for other components (e.g., Login)
export { useAuth };