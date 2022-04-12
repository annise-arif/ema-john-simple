import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Shipment.css';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();

    const handleNameBlur = event =>{
        setName(event.target.value);
    }

    const handleAddressBlur = event =>{
        setAddress(event.target.value);
    }

    const handlePhoneBlur = event =>{
        setPhone(event.target.value);
    }

    const handleShippingSubmit = event =>{
        event.preventDefault();
        const shipping = {name, email, address, phone};
        console.log(shipping);
    }

    return (
        <div className='form-container login-form text-center'>
            <div>
                <h2 className='form-title'>Shipping Information</h2>
                <form className='' onSubmit={handleShippingSubmit}>
                    <div className="input-group mt-4 d-block">
                        <label className='ps-2 me-4 d-block' htmlFor="name">Your Name</label>
                        <input onBlur={handleNameBlur} type="text" name="name" id="" required/>
                    </div>
                    <div className="input-group d-block mt-3">
                        <label className=' d-block ps-1 me-4' htmlFor="email">Your Email</label>
                        <input value={user?.email} readOnly type="email" name="email" id="" required/>
                    </div>
                    <div className="input-group d-block mt-3">
                        <label className=' d-block ps-3 me-3' htmlFor="address">Your Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id=""  required/>
                    </div>
                    <div className="input-group d-block mt-3">
                        <label className='d-block ps-3 me-1' htmlFor="phone">Phone Number</label>
                        <input onBlur={handlePhoneBlur} type="text" name="phone" id="" required/>
                    </div>
                    <p style={{color: 'red'}}>{error}</p>
                    <input className='shipping-btn' type="submit" value="Add Shipping"  required/>
                </form>
                
            </div>
        </div>
    );
};

export default Shipment;