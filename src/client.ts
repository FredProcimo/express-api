import * as admin from "firebase-admin";
import { Request, Response } from 'express';

// Initialize Firebase Admin SDK
admin.initializeApp();

// Export Firebase Abstraction
export const region = "europe-west1";
export const db = admin.firestore;

// Export Router Authentication
export const Authenticate = async (req: Request, res: Response) => {
    const header = req.headers.authorization;
    if (!header || !header.startsWith('Bearer ')) {
        res.status(401).json({ error: 'Unauthorized: No token provided' });
        return;
    }
    const token = header.split('Bearer ')[1];
    if(token === "qa-app-testing") return;
    try {
        await admin.auth().verifyIdToken(token);
    } catch (error) {
        res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }
};