import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "./Orders.css";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [address, setAddress] = useState("");
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const orderItems = JSON.parse(localStorage.getItem("orders")) || [];
        setOrders(orderItems);
        calculateTotal(orderItems);
    }, []);

    const calculateTotal = (orderItems) => {
        let total = orderItems.reduce((sum, item) => sum + item.price, 0);
        setTotalAmount(total);
    };

    const handleBuyNow = () => {
        if (orders.length === 0) {
            alert("No items to buy.");
            return;
        }
        if (!address.trim()) {
            alert("Please enter your delivery address.");
            return;
        }

        alert(`Purchase successful!\nTotal Amount: ₹${totalAmount}\nDelivery Address: ${address}`);
        localStorage.removeItem("orders"); // ✅ Clear Orders after purchase
        setOrders([]);
        setAddress(""); // ✅ Clear address field
    };

    return (
        <div>
            <Navbar isAdmin={false} />
            <div className="orders-container">
                <h1>Order Summary</h1>
                {orders.length === 0 ? (
                    <p>No orders placed.</p>
                ) : (
                    <>
                        <table className="order-table">
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Price (per kg)</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>₹{item.price}</td>
                                        <td>1 kg</td>
                                        <td>₹{item.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <h3>Total Amount: ₹{totalAmount}</h3>

                        <input
                            type="text"
                            placeholder="Enter delivery address with phone number"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="address-input"
                        />

                        <button className="buy-now-btn" onClick={handleBuyNow}>Buy Now</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Orders;
