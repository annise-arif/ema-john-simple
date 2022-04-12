
import { signInWithEmailAndPassword} from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase-init';
import './Login.css';





const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');
    const [error, setError] = useState('');

    const handleEmail = (event) =>{
        setEmail(event.target.value);
        console.log(event.target.value);
    }
    const handlePassword = (event) =>{
        setPassword(event.target.value);
        console.log(event.target.value);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then(res =>{
            const user = res.user;
            setUser(user)
            console.log(user);
        })
        .catch(err =>{
            setError(err.message);
        })
    }

    return (
        <div className='login-form text-center'>
            <h1>Please Login</h1>

            <form onSubmit={handleSubmit}>
             
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
                {
                    user && <p>Login success go to shop <Link to='/shop'>Shop</Link></p>
                }
                {
                    error && <p>wrong account</p>
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