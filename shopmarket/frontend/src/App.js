import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup"; 
import UserDashboard from "./pages/UserDashboard";
import Fruits from "./pages/Fruits";
import Vegetables from "./pages/Vegetables";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
function App() {
    return (
            <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/dashboard" element={<UserDashboard />} />
                <Route path="/fruits" element={<Fruits />} />
                <Route path="/vegetables" element={<Vegetables />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
    );
}

export default App;
