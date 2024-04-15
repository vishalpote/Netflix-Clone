const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const { connection } = require("./database/database");

const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/user", userRoutes);


connection();
app.listen(5000, () => {
  console.log("server started on port 5000");
});
