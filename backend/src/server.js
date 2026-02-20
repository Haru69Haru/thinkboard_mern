import express from "express";
import cors from "cors";
import dotenv from "dotenv";


import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const PORT = process.env.PORT || 5001;
const app = express();

app.use(
    cors({
    origin: "http://localhost:5173",
})
);

//middleware
app.use(express.json()); // this middleware will parse JSON bodies: req.body
app.use(rateLimiter);
// our simple custom middleware

// app.use((req, res) => {
//     console.log("We just got a new req")
// })

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
});
})




