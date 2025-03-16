const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());

// Serve static frontend files from /frontend
app.use(express.static(path.join(__dirname, "frontend")));

console.log("🚀 Server is starting...");

// Serve index.html when accessing the root URL
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

// API endpoint to handle food orders
app.post("/order", (req, res) => {
    console.log("🛒 Order received:", req.body);
    res.json({ message: `✅ Order for ${req.body.food} placed successfully!` });
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
