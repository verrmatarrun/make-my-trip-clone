import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    if (email === storedEmail && password === storedPassword) {
      navigate("/");
    } else {
      alert("Please Check Your Email and password");
    }
  };
  const register = (e) => {
    e.preventDefault();

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  };

  return (
    <div className='login'>
      <form className='containerlog'>
        <h1>Sign-In</h1>
        <label>
          Email <br />
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password <br />
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button onClick={signIn}>Login</button>
        <hr />
        <h4>Don't have account</h4>
        <button onClick={register}>Sign Up</button>
      </form>
    </div>
  );
};

export default Login;
