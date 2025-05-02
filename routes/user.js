const express = require("express");
const router = express.Router();
const addUser = require("../controllers/user/add_controllers");
const loginUser = require("../controllers/user/login_controllers");

router.post("/register", addUser);
router.post("/login", loginUser);

module.exports = router;
