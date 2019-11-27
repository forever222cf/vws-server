import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CandidatesModule } from './components/candidates/candidates.module';
import env from './env';

@Module({
  imports: [
    MongooseModule.forRoot(env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }),
    CandidatesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
