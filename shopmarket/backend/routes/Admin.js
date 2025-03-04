const express = require("express");
const User = require("../models/User");
const router = express.Router();

// ✅ Get All Users
router.get("/members", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching members:", error);
        res.status(500).json({ message: "Server error" });
    }
});

// ✅ Add a New Member
router.post("/members", async (req, res) => {
    try {
        const { name, email, isAdmin } = req.body;

        if (!name || !email) {
            return res.status(400).json({ message: "Name and Email are required" });
        }

        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "Email already exists" });
        }

        user = new User({ name, email, isAdmin: isAdmin || false });
        await user.save();
        res.status(201).json({ message: "Member added successfully", user });
    } catch (error) {
        console.error("Error adding member:", error);
        res.status(500).json({ message: "Server error" });
    }
});

// ✅ Update Member
router.put("/members/:id", async (req, res) => {
    try {
        const { name, email, isAdmin } = req.body;

        const user = await User.findByIdAndUpdate(
            req.params.id,
            { name, email, isAdmin },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "Member updated successfully", user });
    } catch (error) {
        console.error("Error updating member:", error);
        res.status(500).json({ message: "Server error" });
    }
});

// ✅ Delete a Member
router.delete("/members/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "Member deleted successfully" });
    } catch (error) {
        console.error("Error deleting member:", error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
