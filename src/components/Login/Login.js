import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase-init';
import './Login.css';



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      
      const navigate = useNavigate();

    const handleEmail = (event) =>{
        setEmail(event.target.value);

    }
    const handlePassword = (event) =>{
        setPassword(event.target.value);

    }

    if(user){
        navigate('/shop')
    }

    const handleUserSignIn = (event) =>{
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='login-form text-center'>
            <h1>Please Login</h1>

            <form onSubmit={handleUserSignIn}>
             
                <div className='input-group d-block'>
                    <label className='d-block me-5' htmlFor="email">Email</label>
                    
                    <input onBlur={handleEmail} type="email" name="email" id="" required/>
                </div>
                <br />

                <div className='input-group d-block'>
                    <label className='d-block me-2' htmlFor="password">Password</label>
                    
                    <input onBlur={handlePassword} type="password" name="password" id="" required/>
                </div>
                <br />
                <p style={{color: 'red'}}>{error?.message}</p>
                {
                    loading && <p>Loading...</p>
                }
                <input className='submit-btn' type="submit" value="Log In" />
            </form>
            
            <p>
                New To Ema-John? <Link className='form-link' to='/signup'>Create an account</Link>
            </p>
        </div>
    );
};

export default Login;