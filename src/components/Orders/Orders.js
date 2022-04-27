import React from "react";
import { useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";

const Orders = () => {
  const [cart, setCart] = useCart();
  console.log(cart)
  const navigate = useNavigate();
  const handleRemoveProduct = (product) => {
    const rest = cart?.filter((pd) => pd._id !== product._id);
    setCart(rest);
    removeFromDb(product._id);
  }

  return (
    <div className="shop-container">
      <div className="review-items-container">
        {cart?.map((product) => (
          <ReviewItem
            key={product._id}
            product={product}
            handleRemoveProduct={handleRemoveProduct}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart key={cart._id} cart={cart}>
          <button
            onClick={() => {
              navigate("/shipment");
            }}
            className="proceed-btn"
          >
            Proceed Shipping
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
