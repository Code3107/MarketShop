const express = require("express");
const Order = require("../models/Order");
const router = express.Router();

router.get("/summary/:userId", async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.params.userId });

        if (!orders.length) {
            return res.status(404).json({ message: "No orders found" });
        }

        let totalSpent = 0;
        let pendingOrders = [];

        orders.forEach(order => {
            if (order.status === "pending") {
                pendingOrders.push(order);
            }
            totalSpent += order.totalPrice;
        });

        res.status(200).json({ totalSpent, pendingOrders });
    } catch (error) {
        console.error("Order Fetch Error:", error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
