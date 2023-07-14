const express = require("express");


const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const routes=require("./src/routes/handleRoutes")

app.use(cors({origin:'http://localhost:3000',credentials:true}));
app.use(express.json());
app.use(cookieParser());
app.use("/",routes);

const server=app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
server.on('error', (error) => {
  console.error('Server error:', error);
})