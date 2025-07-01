import { Request, Response } from 'express';
import { Booking } from '../../model/booking/booking';
import { db } from '../../client';

export const EditBooking = async (req: Request, res: Response) => {
    try{
        // Verify request data
        const data = new Booking(req.body, true);

        // Check id exists
        if(!req.params.id) throw new Error("no-id");

        // Generate reference
        const ref = db().collection("booking").doc(req.params.id);

        // Check document exists
        if(!(await ref.get()).exists) throw new Error("not-exist");

        // Set internal data
        data.updated = new Date();

        // Update database
        await ref.set(data, { merge: true });

        // Return response
        res.json({result: true, data});
        
    }catch(err){
        res.status(500).json({result: false, error: err.message});
    }
}