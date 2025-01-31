const axios = require( "../config/axiosConfig.js");

export const fetchData = async (req, res) => {
  try {
    const response = await axios.get("/photos?_limit=5");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data" });
  }
};
