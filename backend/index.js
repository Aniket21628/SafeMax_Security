import express, { json } from 'express';
import cors from "cors";
import path from 'path'; 
import rootRouter from "./routes/server.js";
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());

app.use(json());

app.use("/api/v1", rootRouter);

const __dirname = path.dirname(new URL(import.meta.url).pathname);

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
