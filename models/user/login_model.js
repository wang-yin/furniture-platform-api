const db = require("../schema/UserSchema");
const bcrypt = require("bcrypt");

module.exports = async function login(loginData) {
  try {
    const findUser = await db.findOne({ userID: loginData.userID });
    if (!findUser) {
      const error = new Error("查無此帳號");
      error.status = 400;
      throw error;
    }
    const loginPassword = loginData.password;
    const registerPassword = findUser.password;
    const verify = await bcrypt.compare(loginPassword, registerPassword);
    if (verify) {
      return {
        success: true,
        status: 200,
        message: "登入成功",
      };
    } else {
      const error = new Error("帳號密碼錯誤");
      error.status = 400;
      throw error;
    }
  } catch (err) {
    if (!err.status) {
      err.status = 500;
      err.message = "資料庫錯誤：" + err.message;
    }
    throw err;
  }
};
