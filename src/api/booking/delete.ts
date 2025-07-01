import { Request, Response } from 'express';

export const DeleteBooking = (req: Request, res: Response) => {
    try{
        if(!req.params.id) {
            res.status(500).json({result: false, error: "no-id" });
            return;
        }
        res.json({result: true, id: req.params.id });

    }catch(err){
        res.status(500).json({result: false, error: err.message});
    }
}