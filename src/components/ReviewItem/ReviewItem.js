import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const {handleRemoveProduct, product} = props;
    console.log(product)
    const {name, img, price, shipping, quantity} = product;
    return (
        <div className='review-item'>
            <div className="img">
               <img src={img} alt="" />
            </div>
            <div className="review-item-detail-container">
                <div className="review-item-details">
                    <p className='product-name' title={name}>
                      <b>{name.length > 20 ? name.slice(0, 20)+'...' : name}</b>
                    </p>
                    <p>Price: <span className='orange-color'>${price}</span></p>
                    <p><small>Shipping: ${shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button onClick={ ()=> handleRemoveProduct(product)} className='delete-button'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;