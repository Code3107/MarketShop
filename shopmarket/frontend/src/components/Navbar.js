import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ isAdmin }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate("/login");
    };

    return (
        <nav className="navbar">
            <h2>Market Shop</h2>
            <ul>
                <li><Link to={isAdmin ? "/admin-dashboard" : "/dashboard"}>Dashboard</Link></li>
                <li><Link to="/fruits">Fruits</Link></li>
                <li><Link to="/vegetables">Vegetables</Link></li>
                <li><Link to="/orders">Orders</Link></li>
                {!isAdmin && <li><Link to="/cart">Cart</Link></li>}
            </ul>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
        </nav>
    );
};

export default Navbar;
