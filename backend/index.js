const express = require("express");
const cors = require("cors");
// const fetch = require("node-fetch");

const app = express();
const PORT = 3001;

app.use(cors());

app.get("/api/matches", async (req, res) => {
  try {
    const response = await fetch("https://www.scorebat.com/video-api/v3/");
    const data = await response.json();
    res.json(data.response);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch match data" });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
