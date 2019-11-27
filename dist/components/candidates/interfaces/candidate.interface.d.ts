import { Document } from 'mongoose';
export interface Candidate extends Document {
    name: string;
    email: string;
    phone: string;
    code: string;
}
