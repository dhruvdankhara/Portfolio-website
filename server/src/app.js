import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import errorHandler from "./middlewares/error.middleware.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(
  morgan(":method :url :status :response-time ms - :res[content-length]")
);

import authRoute from "./routes/auth.routes.js";

app.use("/api/v1/auth", authRoute);

app.use(errorHandler);

export default app;
