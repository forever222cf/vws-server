import { Controller, Get, Post, Body, UseFilters, ForbiddenException } from '@nestjs/common';
import { CandidatesService } from './candidates.service';
import { Candidate } from './interfaces/candidate.interface';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { HttpExceptionFilter } from './../../shared/exceptions/http-exception.filter';

@Controller('candidates')
export class CandidatesController {
  constructor(private readonly candidatesService: CandidatesService) {}

  @Post('create')
  @UseFilters(new HttpExceptionFilter())
  async create(@Body() createCandidateDto: CreateCandidateDto) {
    try {
      return await this.candidatesService.create(createCandidateDto);
    } catch(error) {
      throw new ForbiddenException(error);
    }
  }

  @Get('getAll')
  async getAll(): Promise<Candidate[]> {
    return this.candidatesService.getAll();
  }
}
