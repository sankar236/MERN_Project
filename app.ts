import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import taskRoutes from "./routes/taskRoutes"

const app = express();

app.use(cors());
app.use(express.json())
app.use("/api/tasks", taskRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/mydb")

export default app;