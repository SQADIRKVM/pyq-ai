const express = require("express");
const cors = require("cors");

const app = express();

// ✅ Allow Specific Frontend Origin
const allowedOrigins = [
  "https://pyq-ai-1.onrender.com", // ✅ Add your frontend URL
  "http://localhost:8080",         // ✅ If testing locally
  "http://localhost:3000",         // ✅ If running React locally
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "OPTIONS"], // ✅ Allow necessary HTTP methods
  allowedHeaders: ["Content-Type"],    // ✅ Allow necessary headers
}));

app.use(express.json());

// Sample API Route
app.post("/api/deepseek", (req, res) => {
  res.json({ message: "DeepSeek API working!" });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
