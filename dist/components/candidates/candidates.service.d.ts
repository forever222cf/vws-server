import { Model } from 'mongoose';
import { Candidate } from './interfaces/candidate.interface';
import { CreateCandidateDto } from './dto/create-candidate.dto';
export declare class CandidatesService {
    private readonly candidateModel;
    constructor(candidateModel: Model<Candidate>);
    create(createCandidateDto: CreateCandidateDto): Promise<any>;
    getAll(): Promise<Candidate[]>;
}
