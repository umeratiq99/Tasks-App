// Implementing Functions to create and validate tokens

const { sign, verify } = require("jsonwebtoken");  // Requireing sign and verify function from JWT
const dotenv = require("dotenv"); // Requering .env file for secret
dotenv.config();

// Creating Token
const createTokens = (user) => {
  const accessToken = sign(
    { username: user.email, id: user.id },
    process.env.SECRET
  );

  return accessToken;
};

// Verifying Token
const validateToken = (req, res, next) => {
  const accessToken = req.cookies["access-token"];

  if (!accessToken)
    return res.status(400).json({ error: "User not Authenticated!" });
  else {
    try {
      const validToken = verify(accessToken, process.env.SECRET);
      if (validToken) {
        req.authenticated = true;
        req.query.user = validToken.id;
        return next();
      } else {
        return res.status(400).json({ error: err });
      }
    } catch (err) {
      return res.status(400).json({ error: err });
    }
  }
};

module.exports = { createTokens, validateToken };
