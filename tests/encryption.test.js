const encryption = require("../utils/encryption");

test("bcrypt 應正確加密密碼", async () => {
  const plainPassword = "123";
  const hashedPassword = await encryption(plainPassword);
  expect(hashedPassword).not.toBe(plainPassword);
  expect(hashedPassword.length).toBeGreaterThan(0);
});
