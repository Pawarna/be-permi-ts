import express, { Express, Request, Response } from 'express';
import 'dotenv/config';
import cors from 'cors';

import routes from './routes'

const app: Express = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Agar bisa diakses oleh Vue nanti
app.use(express.json()); // Agar bisa baca body JSON

// Route sederhana
app.get('/', (req: Request, res: Response) => {
  res.send('Backend Permikomnas is Running!');
});

// Contoh route API
app.use('/api', routes)

// Jalankan server
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});