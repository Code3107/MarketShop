const express = require("express");
const User = require("../models/User");
const router = express.Router();

// ✅ Get User Profile
router.get("/:userId", async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error("Profile Fetch Error:", error);
        res.status(500).json({ message: "Server error", error });
    }
});

module.exports = router;
