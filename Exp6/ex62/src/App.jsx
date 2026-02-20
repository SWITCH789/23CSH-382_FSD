import React, { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};

    // Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.(com|in|[a-z]{2,})$/i;
    if (!emailPattern.test(email)) {
      tempErrors.email =
        "Email must contain @ and end with .com, .in or valid country code";
    }

    // Password Validation
    const passwordPattern =
      /^[A-Z](?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{4,}$/;

    if (!passwordPattern.test(password)) {
      tempErrors.password =
        "Password must start with capital letter, contain one number, one special character, and minimum 5 characters";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form Submitted Successfully!");
      setEmail("");
      setPassword("");
      setErrors({});
    }
  };

  return (
    <div className="container">
      <h2>Client-Side Form Validation</h2>
      <form onSubmit={handleSubmit}>

        <label>Email ID:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default App;