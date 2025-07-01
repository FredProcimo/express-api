import express, { Request, Response } from 'express';
import { CreateBooking } from './api/booking/create';
import { EditBooking } from './api/booking/edit';
import { DeleteBooking } from './api/booking/delete';

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

/**
 * API INFO
 */
app.get('/', (_: Request, res: Response) => { 
  res.send('Hello World!');
});

/**
 * API ROUTES
 */
app.post('/booking', CreateBooking);
app.put('/booking/:id', EditBooking);
app.delete('/booking/:id', DeleteBooking);

/**
 * START SERVER
 */
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});