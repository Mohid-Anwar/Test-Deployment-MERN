const express = require("express");
const cors = require("cors");
const axios = require("./config/axiosConfig");
const dataRoutes = require("./routes/dataRoutes");

const app = express();

// Single CORS configuration
app.use(cors({
    origin: ["https://test-deployment-mern-frontend.vercel.app", "http://localhost:5173"],
    methods: ["POST", "GET"],
    credentials: true,
}));

app.use(express.json());
app.use("/api/data", dataRoutes);
app.get("/", (req, res) => {
    res.send("Hi I am Working");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
