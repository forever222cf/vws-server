import { IsString } from 'class-validator';

export class CreateCandidateDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly email: string;
  @IsString()
  readonly phone: string;
  @IsString()
  readonly code: string;
}
