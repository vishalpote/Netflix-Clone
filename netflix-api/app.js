import  express from "express";
import  cors from "cors";
import  userRoutes from "./routes/UserRoutes.js";
import  { connection } from "./database/database.js";

const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/user", userRoutes);


connection();
app.listen(5000, () => {
  console.log("server started on port 5000");
});
