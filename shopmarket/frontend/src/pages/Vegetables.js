import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./Vegetables.css";

const Vegetables = () => {
    const [cart, setCart] = useState([]);

    const vegetablesData = [
        { id: 1, name: "Tomato", price: 40, image: `${process.env.PUBLIC_URL}/images/tomato.jpeg` },
        { id: 2, name: "Potato", price: 30, image: `${process.env.PUBLIC_URL}/images/potato.jpeg` },
        { id: 3, name: "Carrot", price: 50, image: `${process.env.PUBLIC_URL}/images/carrot.jpeg` },
        { id: 4, name: "Cabbage", price: 35, image: `${process.env.PUBLIC_URL}/images/cabbage.jpeg` },
        { id: 5, name: "Cauliflower", price: 60, image: `${process.env.PUBLIC_URL}/images/cauliflower.jpeg` },
        { id: 6, name: "Onion", price: 45, image: `${process.env.PUBLIC_URL}/images/onion.jpeg` },
        { id: 7, name: "Spinach", price: 25, image: `${process.env.PUBLIC_URL}/images/spinach.jpeg` },
        { id: 8, name: "Brinjal", price: 55, image: `${process.env.PUBLIC_URL}/images/brinjal.jpeg` },
        { id: 9, name: "Capsicum", price: 70, image: `${process.env.PUBLIC_URL}/images/capsicum.jpeg` },
        { id: 10, name: "Lady Finger", price: 50, image: `${process.env.PUBLIC_URL}/images/ladyfinger.jpeg` },
    ];

    const addToCart = (vegetable) => {
        let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
        cartItems.push(vegetable);
        localStorage.setItem("cart", JSON.stringify(cartItems));
        setCart(cartItems);
        alert(`${vegetable.name} added to cart!`);
    };

    return (
        <div>
            <Navbar isAdmin={false} />
            <div className="vegetables-container">
                {vegetablesData.map((vegetable) => (
                    <div className="vegetable-card" key={vegetable.id}>
                        <img src={vegetable.image} alt={vegetable.name} />
                        <h3>{vegetable.name}</h3>
                        <p>₹{vegetable.price} per kg</p>
                        <button onClick={() => addToCart(vegetable)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Vegetables;
