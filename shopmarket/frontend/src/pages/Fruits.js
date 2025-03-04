import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./Fruits.css";

const Fruits = () => {
    const [cart, setCart] = useState([]);

    const fruitsData = [
        { id: 1, name: "Apple", price: 150, image: `${process.env.PUBLIC_URL}/images/apple.jpeg` },
        { id: 2, name: "Banana", price: 50, image: `${process.env.PUBLIC_URL}/images/banana.jpg`},
        { id: 3, name: "Mango", price: 200, image: `${process.env.PUBLIC_URL}/images/mango.jpg`},
        { id: 4, name: "Orange", price: 100, image: `${process.env.PUBLIC_URL}/images/orange.jpg` },
        { id: 5, name: "Pineapple", price: 250, image: `${process.env.PUBLIC_URL}/images/pineapple.jpg` },
        { id: 6, name: "Watermelon", price: 80, image: `${process.env.PUBLIC_URL}/images/watermelon.jpg` },
        { id: 7, name: "Strawberry", price: 300, image: `${process.env.PUBLIC_URL}/images/strawberry.jpg` },
        { id: 8, name: "Grapes", price: 120, image: `${process.env.PUBLIC_URL}/images/grapes.jpg` },
        { id: 9, name: "Papaya", price: 90, image: `${process.env.PUBLIC_URL}/images/papaya.jpeg` },
        { id: 10, name: "Pomegranate", price: 180, image: `${process.env.PUBLIC_URL}/images/promogranate.jpg` },
    ];

    const addToCart = (fruit) => {
        let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
        cartItems.push(fruit);
        localStorage.setItem("cart", JSON.stringify(cartItems));
        setCart(cartItems);
        alert(`${fruit.name} added to cart!`);
    };

    return (
        <div>
            <Navbar isAdmin={false} />
            <div className="fruits-container">
                {fruitsData.map((fruit) => (
                    <div className="fruit-card" key={fruit.id}>
                        <img src={fruit.image} alt={fruit.name} />
                        <h3>{fruit.name}</h3>
                        <p>₹{fruit.price} per kg</p>
                        <button onClick={() => addToCart(fruit)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Fruits;
