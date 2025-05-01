const express = require("express");
const router = express.Router();
const addUser = require("../controllers/user/add_controllers");

router.post("/register", addUser);

module.exports = router;
