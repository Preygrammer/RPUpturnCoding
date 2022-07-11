import React, { useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "../actions/index";
import { useNavigate } from "react-router-dom";
import "../assets/scss/components/_login.scss";

function Login(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    props
      .dispatchLoginUser({ email, password })
      .then(() => navigate("/"))
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <div className="form-container">
      <div className="signature">
        <div className="signature-logo">
          <div className="signature-title">Upturn Coding</div>
          <small>by Reymart Pineda</small>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <h2>Login to start coding</h2>
        <p>{error && "Invalid email or password"}</p>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
        </div>
        <button className="btn-login">Login</button>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchLoginUser: (credentials) => dispatch(loginUser(credentials)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
