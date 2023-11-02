import { Module } from '@nestjs/common';
import { SurveyModule } from './survey/survey.module';


@Module({
  imports: [SurveyModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
