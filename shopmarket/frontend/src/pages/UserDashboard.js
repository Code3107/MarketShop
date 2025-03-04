import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import "./DashBoard.css";

const UserDashboard = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // ✅ Retrieve userId from localStorage
    const userId = localStorage.getItem("userId");

    useEffect(() => {
        console.log("🔍 User ID from localStorage:", userId);

        if (!userId) {
            console.log("❌ No userId found. Redirecting to login...");
            navigate("/login");
            return;
        }

        const fetchUserData = async () => {
            try {
                console.log("📡 Fetching profile for user:", userId);
                const res = await axios.get(`http://localhost:5000/api/profile/${userId}`);
                console.log("✅ Profile Data:", res.data);
                setUserData(res.data);
            } catch (error) {
                console.error("❌ Error fetching profile:", error);
                setError("Failed to load profile.");
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [userId, navigate]);

    if (loading) return <h2>🔄 Loading...</h2>;
    if (error) return <h2>❌ {error}</h2>;

    return (
        <div>
            <Navbar isAdmin={false} />
            <div className="dashboard-container">
                {userData ? (
                    <>
                        <h1>Welcome, {userData.name}!</h1>
                        <p><b>Email:</b> {userData.email}</p>
                    </>
                ) : (
                    <h2>❌ No Data Available</h2> 
                )}
            </div>
        </div>
    );
};

export default UserDashboard;
