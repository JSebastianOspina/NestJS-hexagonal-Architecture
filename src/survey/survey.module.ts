import { Module } from '@nestjs/common';
import { SurveyImplementation } from './application/survey.service';
import { SurveyController } from './infraestructure/survey.controller';

@Module({
  controllers: [SurveyController],
  providers: [SurveyImplementation],
})
export class SurveyModule {}
