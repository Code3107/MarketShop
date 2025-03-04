import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Cart.css";

const Cart = () => {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(cartItems);
    }, []);

    const removeFromCart = (index) => {
        let updatedCart = [...cart];
        updatedCart.splice(index, 1);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const handleProceed = () => {
        if (cart.length === 0) {
            alert("Your cart is empty.");
            return;
        }

        localStorage.setItem("orders", JSON.stringify(cart)); // ✅ Move items to Orders
        localStorage.removeItem("cart"); // ✅ Clear Cart
        navigate("/orders"); // ✅ Go to Orders Page
    };

    return (
        <div>
            <Navbar isAdmin={false} />
            <div className="cart-container">
                <h1>Shopping Cart</h1>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <>
                        <ul>
                            {cart.map((item, index) => (
                                <li key={index} className="cart-item">
                                    <img src={item.image} alt={item.name} />
                                    <div>
                                        <h3>{item.name}</h3>
                                        <p>₹{item.price} per kg</p>
                                    </div>
                                    <button className="remove-btn" onClick={() => removeFromCart(index)}>Remove</button>
                                </li>
                            ))}
                        </ul>
                        <button className="proceed-btn" onClick={handleProceed}>Proceed</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;
