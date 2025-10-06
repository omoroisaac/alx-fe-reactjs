import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Profile from "./components/Profile.jsx";
import BlogPost from "./components/BlogPost.jsx";
import Login from "./components/Login.jsx";
import ProtectedRoute, { fakeAuth } from "./components/ProtectedRoute.jsx";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/profile">Profile</Link> |{" "}
        <Link to="/blog/1">Blog Post 1</Link> |{" "}
        <Link to="/login">Login</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />

        {/* Use ProtectedRoute component */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Dynamic Route */}
        <Route path="/blog/:id" element={<BlogPost />} />

        <Route path="/login" element={<Login auth={fakeAuth} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;