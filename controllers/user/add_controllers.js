const encryption = require("../../utils/encryption");
const toRegister = require("../../models/user/register_model");

const addUser = async (req, res) => {
  try {
    const password = await encryption(req.body.password);
    const userData = {
      name: req.body.name,
      userID: req.body.userID,
      password: password,
    };
    const result = await toRegister(userData);
    res.status(result.status).json({ success: true, message: result.message });
  } catch (err) {
    console.error("Controller Error:", err.detail || err);
    res.status(err.status || 500).json({ success: false, message: err.message || "伺服器錯誤" });
  }
};

module.exports = addUser;
