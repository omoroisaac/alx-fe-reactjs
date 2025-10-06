import React from "react";
import { Navigate } from "react-router-dom";

// Simulated authentication state
const fakeAuth = {
  isAuthenticated: false,
  login(cb) { this.isAuthenticated = true; cb(); },
  logout(cb) { this.isAuthenticated = false; cb(); }
};

export default function ProtectedRoute({ children }) {
  return fakeAuth.isAuthenticated ? children : <Navigate to="/login" />;
}

// Optionally export fakeAuth for Login component to use
export { fakeAuth };