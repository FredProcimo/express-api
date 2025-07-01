import { Request, Response } from 'express';
import { Booking } from '../../model/booking/booking';

export const CreateBooking = (req: Request, res: Response) => {
    try{
        const data = new Booking(req.body);
        res.json({result: true, data});
    }catch(err){
        res.status(500).json({result: false, error: err.message});
    }
}