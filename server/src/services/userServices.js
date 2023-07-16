const Users = require("../models/users"); // Requering Users model 
const bcrypt = require("bcrypt"); // Requring bcrypt library for hashing the password

// registration function
const Register = async (body) => {
  try {
    const { username, email, password } = body;
    let pass = await bcrypt.hash(password, 10);
    await Users.create({
      username: username,
      email: email,
      password: pass,
    });
    return true;
  } catch (err) {
    return false;
  }
};

// logi function  
const Login = async (body) => {
  const { email, password } = body;

  const user = await Users.findOne({ where: { email: email } });
  if (!user) {
    return ({ message: "User Doesn't Exist", success: false });
  } else {
    const dbPassword = user.password;
    let match=await bcrypt.compare(password, dbPassword);
    if (!match) {
        return ({
          message: "Wrong Email and Password Combination!",
          success: false,
        });
      } else {
        return ({ message: "Login successful", success: true, response : user});
      }
  }
};

module.exports = { Register, Login };
