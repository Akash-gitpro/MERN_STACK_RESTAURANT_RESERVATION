import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbConnection.js";

dotenv.config();
const app = express();

// ✅ Allow frontend (Vercel) to access backend properly
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "*", // Fallback for local testing
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// ✅ Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ API routes
app.use("/api/v1/reservation", reservationRouter);

// ✅ Simple test route
app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "HELLO WORLD FROM BACKEND",
  });
});

// ✅ Connect MongoDB
dbConnection();

// ✅ Global error handler
app.use(errorMiddleware);

export default app;
