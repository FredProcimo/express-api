import express, { Request, Response } from 'express';
import { CreateBooking } from './api/booking/create';
import { EditBooking } from './api/booking/edit';
import { DeleteBooking } from './api/booking/delete';
import { Authenticate } from './client';

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

/**
 * API OPTIONS
 */
app.options('*', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.sendStatus(200);
});

/**
 * API INFO
 */
app.get('/', (_: Request, res: Response) => { 
  res.send('Hello World!');
});

/**
 * API ROUTES
 */
app.post('/booking', Authenticate, CreateBooking);
app.put('/booking/:id', Authenticate, EditBooking);
app.delete('/booking/:id', Authenticate, DeleteBooking);

/**
 * START SERVER
 */
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});