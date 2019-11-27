import { Model } from 'mongoose';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Candidate } from './interfaces/candidate.interface';
import { CreateCandidateDto } from './dto/create-candidate.dto';

@Injectable()
export class CandidatesService {
  constructor(@InjectModel('candidate') private readonly candidateModel: Model<Candidate>) {}

  async create(createCandidateDto: CreateCandidateDto) {
    const createdCandidate = new this.candidateModel({
      ...createCandidateDto,
      code: '0'
    });
    // Check if phone number is exist
    try {
      let isPhoneExist = await this.candidateModel.exists({ phone: createCandidateDto.phone });
      let isEmailExist = await this.candidateModel.exists({ email: createCandidateDto.email });

      if (isPhoneExist) {
        return Promise.reject('Phone number exists!');
      }
      if (isEmailExist) {
        return Promise.reject('Email exists!');
      }

      return await createdCandidate.save();
    } catch (error) {
      console.log('Create Candidate Error:', error);
    }
  }

  async getAll(): Promise<Candidate[]> {
    return await this.candidateModel.find().exec();
  }
}
