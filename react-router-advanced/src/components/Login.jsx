import { useNavigate } from "react-router-dom";
import { useAuth } from "./ProtectedRoute.jsx";

export default function Login() {
  const navigate = useNavigate();
  const auth = useAuth();

  const handleLogin = () => {
    auth.login(() => navigate("/profile"));
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}