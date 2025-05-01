const db = require("../schema/UserSchema");

module.exports = async function register(userData) {
  try {
    const verifyData = await db.findOne({
      userID: userData.userID,
    });
    if (verifyData) {
      const error = new Error("此帳號已註冊");
      error.status = 400;
      throw error;
    }
    const newUser = new db(userData);
    await newUser.save();
    return {
      success: true,
      status: 200,
      message: "註冊成功",
    };
  } catch (err) {
    const error = new Error("資料庫錯誤");
    error.status = 500;
    error.detail = err;
    throw error;
  }
};
