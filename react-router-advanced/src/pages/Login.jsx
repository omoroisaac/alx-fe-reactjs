import { useNavigate } from "react-router-dom";

export default function Login({ auth }) {
  const navigate = useNavigate();

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