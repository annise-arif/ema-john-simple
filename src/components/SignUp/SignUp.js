import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import auth from "../../firebase-init";
import "./SignUp.css";

const googleProvider = new GoogleAuthProvider();

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
    console.log(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
    console.log(event.target.value);
  };
  const handleConfirmPassword = (event) => {
    setCpassword(event.target.value);
  };

  const handleSignInWithGoogle = (event) => {
    event.preventDefault();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        const message = error.message;
        setError(message);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== cpassword) {
      setError("your password did not match");
    } else if (password === cpassword) {
      createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const user = res.user;
        setUser(user);
        console.log(user);
      })
      .catch(error =>{
        setError(error)
      });
    }
  };
  return (
    <div className="login-form text-center">
      <h1>Please Sign Up</h1>

      <div className="google-signin">
        <button onClick={handleSignInWithGoogle}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png"
            alt=""
          />{" "}
          Google Sign In
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="input-group d-block py-4">
          <label className="d-block me-0 ps-3" htmlFor="name">
            Your Name
          </label>

          <input onBlur={handleName} type="text" name="name" id="" required />
        </div>
        <div className="input-group d-block">
          <label className="d-block me-4 pe-3" htmlFor="email">
            Email
          </label>

          <input
            onBlur={handleEmail}
            type="email"
            name="email"
            id=""
            required
          />
        </div>
        <br />

        <div className="input-group d-block">
          <label className="d-block me-2" htmlFor="password">
            Password
          </label>

          <input
            onBlur={handlePassword}
            type="password"
            name="password"
            id=""
            required
          />
        </div>
        <div className="input-group d-block">
          <label className="d-block ms-1 pe-2 pt-3" htmlFor="password">
            Confirm Password
          </label>

          <input
            onBlur={handleConfirmPassword}
            type="password"
            name="password"
            id=""
            required
          />
        </div>
        <br />
        {user && (
          <p className="text-success">
            <small>login success full</small>
          </p>
        )}
        {!user && (
          <p>
            <small className="text-danger">Fill The Input Field</small>
          </p>
        )}
        <input className="submit-btn" type="submit" value="Sign Up" />
      </form>
      <p>
        Already Have an account?{" "}
        <Link className="form-link" to="/login">
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
