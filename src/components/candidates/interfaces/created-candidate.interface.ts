import { Document } from 'mongoose';

export interface Candidate extends Document {
  code: string;
}
