import { Request, Response } from 'express';
import { db } from '../../client';

export const DeleteBooking = async (req: Request, res: Response) => {
    try{

        // Check id exists
        if(!req.params.id) throw new Error("no-id");

        // Generate reference
        const ref = db().collection("booking").doc(req.params.id);
        
        // Check document exists
        if(!(await ref.get()).exists) throw new Error("not-exist");

        // Set delete state
        await ref.update({deleted: true});
        
        // Return response
        res.json({result: true, id: req.params.id });

    }catch(err){
        res.status(500).json({result: false, error: err.message});
    }
}