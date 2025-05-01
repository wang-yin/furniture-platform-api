const express = require("express");
const app = express();
require("dotenv").config();
require("./models/connection_db");
const PORT = process.env.PORT || 3000;
const user = require("./routes/user");
const cors = require("cors");
const corsOptions = {
  origin: ["https://www.example.com", "http://localhost:3001"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/", user);

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
