import React, { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    // explicit checks (these strings are what the tests look for)
    if (!username) {
      validationErrors.username = "Username is required";
    }
    if (!email) {
      validationErrors.email = "Email is required";
    }
    if (!password) {
      validationErrors.password = "Password is required";
    }

    // if there are validation errors, use setErrors and stop submission
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // clear errors and proceed
    setErrors({});
    console.log("Registration successful!", { username, email, password });
    alert("Registration successful!");

    // reset form
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div style={styles.container}>
      <h2>User Registration Form</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            if (errors.username) setErrors((prev) => ({ ...prev, username: "" }));
          }}
          style={styles.input}
        />
        {errors.username && <div style={styles.error}>{errors.username}</div>}

        <label style={styles.label}>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
          }}
          style={styles.input}
        />
        {errors.email && <div style={styles.error}>{errors.email}</div>}

        <label style={styles.label}>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (errors.password) setErrors((prev) => ({ ...prev, password: "" }));
          }}
          style={styles.input}
        />
        {errors.password && <div style={styles.error}>{errors.password}</div>}

        <button type="submit" style={styles.button}>
          Register
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginTop: "10px",
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    marginTop: "20px",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginTop: "8px",
    fontSize: "0.9em",
  },
};

export default RegistrationForm;