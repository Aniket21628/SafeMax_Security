import express, { json } from 'express';
import cors from "cors";
import path from 'path'; // Add path module to handle paths
import rootRouter from "./routes/server.js";
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Enable CORS
app.use(cors());

// Parse JSON bodies
app.use(json());

// API routes
app.use("/api/v1", rootRouter);

// Serve static files from the React app (after running `npm run build` in React)
app.use(express.static(path.join(__dirname, 'build')));

// Fallback to index.html for all other routes (important for React Router handling)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
