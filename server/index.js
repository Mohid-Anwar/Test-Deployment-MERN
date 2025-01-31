const express = require("express");
const cors = require("cors");
const axios = require("./config/axiosConfig");
const dataRoutes = require("./routes/dataRoutes");

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: [""],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(express.json());
app.use("/api/data", dataRoutes);
app.get("/", (req, res) => {
  res.send("Hi I am Working");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
