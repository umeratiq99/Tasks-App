const express = require("express");
// creating express PP
const app = express();

// Initializing the middlewares
const cors = require("cors"); // middleware allows cross-origin resource sharing i.e(with React)
const cookieParser = require("cookie-parser"); // middleware to parse cookie headers from req.cookies
const routes=require("./routes/handleRoutes")  // middleware to hadle routes

//
app.use(cors({origin:'http://localhost:3000',credentials:true}));
app.use(express.json());
app.use(cookieParser());
app.use("/",routes);

// listening to port 5000
const server=app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
server.on('error', (error) => {
  console.error('Server error:', error);
})