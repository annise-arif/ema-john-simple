import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase-init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import "./SignUp.css";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

 
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

 
  if(user){
      navigate('/shop');
  }

  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("your two passwords did not match");
      return;
    } 
    if (password.length <6) {
      setError('Password must be 6 characters or longer');
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };

  const handleSignInWithGoogle = (event) => {
    event.preventDefault();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        if(user){
            navigate('/about');
        }
      })
      .catch((error) => {
        const message = error.message;
        setError(message);
      });
  };

  return (
    <div className="login-form text-center">
      <h1>Please Sign Up</h1>

      <div className="google-signin">
        <button onClick={handleSignInWithGoogle} className=''>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png"
            alt=""
          />{" "}
          Google Sign In
        </button>
      </div>

      <form onSubmit={handleCreateUser}>
        {/* <div className="input-group d-block py-4">
          <label className="d-block me-0 ps-3" htmlFor="name">
            Your Name
          </label>

          <input onBlur={handleName} type="text" name="name" id="" required />
        </div> */}
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
        
          <p>
            <small className="text-danger">{error}</small>
          </p>
        
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
