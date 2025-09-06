import express from "express";
import cors from "cors";
import "dotenv/config";
import { clerkMiddleware, requireAuth } from "@clerk/express";
import aiRouter from "./routes/ai.route.js";
import userRouter from "./routes/user.route.js";
import connectCloudinary from "./config/cloudinary.js";

const app = express();

await connectCloudinary();

app.use(cors());
app.use(express.json());
// app.use(clerkMiddleware()); // Temporarily disabled for testing

// Add request logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => res.send("Server is Live!"));

// Test endpoint to verify API is working
app.post("/api/test", (req, res) => {
  console.log("TEST ENDPOINT HIT:", req.body);
  res.json({ success: true, message: "API is working!", data: req.body });
});

// Temporarily disable auth for testing
app.use("/api/v1/ai", aiRouter);
app.use("/api/v1/user", userRouter);

// With auth (enable after testing)
// app.use("/api/v1/ai", requireAuth(), aiRouter);
// app.use("/api/v1/user", requireAuth(), userRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});
