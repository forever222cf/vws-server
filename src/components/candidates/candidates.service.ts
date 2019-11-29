import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Candidate } from './interfaces/candidate.interface';
import { CreateCandidateDto } from './dto/create-candidate.dto';

@Injectable()
export class CandidatesService {
  constructor(@InjectModel('candidate') private readonly candidateModel: Model<Candidate>) {}

  _getRandomInt (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  async create(createCandidateDto: CreateCandidateDto) {
    try {
      // Generate code
      let code: string;
      let isCodeExist = true;
      let whileBoundary = 0;
      let isOutOfCode = false;
      let allCandidates = await this.getAll();

      do {
        code = this._getRandomInt(1e3, 1e4).toString();
        if (!allCandidates.find(x => x.code === code)) {
          isCodeExist = false;
        }

        whileBoundary++;
        if (whileBoundary > 100) {
          isOutOfCode = true;
          break;
        }
      } while(isCodeExist);

      // No more code avaiable
      if (isOutOfCode) {
        return Promise.reject('No more code available!');
      }

      // Create candidate
      let createdCandidate = new this.candidateModel({
        ...createCandidateDto,
        code: code
      });

      // Check if phone number is exist
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

  async getRandom(): Promise<Candidate> {
    let allCandidates = await this.getAll();
    let selectedIdx = this._getRandomInt(0, allCandidates.length - 1);
    let selectedCandidate = allCandidates[selectedIdx];

    return selectedCandidate;
  }
}
