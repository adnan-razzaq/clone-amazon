import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const LoginAccount = (e) => {
    e.preventDefault();
    //logic for login

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //redirect to home page
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  const SignInAccount = (e) => {
    e.preventDefault();
    //logic for sign in

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //create and redirect to home page
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="login">
      <Link to="/">
        {" "}
        <img
          className="login__logo"
          src="https://logodix.com/logo/233733.gif"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h2>Sign in</h2>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(event) => setemail(event.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(event) => setpassword(event.target.value)}
          />
          <button onClick={LoginAccount} className=" login__signInButton">
            Sign in
          </button>
        </form>
        <p>
          By signing in you agree to amazon privacy conditions and statements
        </p>
        <button onClick={SignInAccount} className="login__registerButton">
          Create your amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
