const express = require("express");
const router = express.Router();
const axios = require("../config/axiosConfig");

router.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/photos?_limit=5"
    );
    const modifiedData = response.data.map((item) => ({
      id: item.id,
      title: item.title,
      url: `https://plus.unsplash.com/premium_photo-1738090991182-dd746e5da0c9?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    }));
    res.json(modifiedData);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

module.exports = router;
