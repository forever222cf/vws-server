import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CandidatesController } from './candidates.controller';
import { CandidatesService } from './candidates.service';
import { CandidateSchema } from './schema/candidate.schema';

@Module({
  imports: [MongooseModule.forFeature([{
    name: 'candidate',
    schema: CandidateSchema
  }])],
  controllers: [CandidatesController],
  providers: [CandidatesService]
})
export class CandidatesModule {}
