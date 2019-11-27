import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CandidatesModule } from './components/candidates/candidates.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/vws', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }),
    CandidatesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
