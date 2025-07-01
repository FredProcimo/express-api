import { Request, Response } from 'express';
import { Booking } from '../../model/booking/booking';
import { db } from '../../client';

export const CreateBooking = async (req: Request, res: Response) => {
    try{
        // Verify request data
        const data = new Booking(req.body);

        // Generate reference
        const ref = db().collection("booking").doc();

        // Set internal data
        data.id = ref.id;
        data.created = new Date();
        data.updated = data.created;

        // Update database
        await ref.set(data);

        // Return response
        res.json({result: true, data});
        
    }catch(err){
        res.status(500).json({result: false, error: err.message});
    }
}