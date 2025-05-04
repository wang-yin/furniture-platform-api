const toLogin = require("../../models/user/login_model");

const loginUser = async (req, res) => {
  try {
    const loginData = {
      userID: req.body.userID,
      password: req.body.password,
    };
    const result = await toLogin(loginData);
    res.status(result.status).json({ success: true, message: result.message, token: result.token });
  } catch (err) {
    console.error("Controller Error:", err);
    res.status(err.status || 500).json({ success: false, message: err.message });
  }
};

module.exports = loginUser;
