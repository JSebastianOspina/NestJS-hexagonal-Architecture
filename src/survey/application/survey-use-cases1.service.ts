import { Injectable } from '@nestjs/common';
import { CreateSurveyDto } from '../infraestructure/dto/create-survey.dto';
import { UpdateSurveyDto } from '../infraestructure/dto/update-survey.dto';
import { SurveyUseCasesImplementation } from "./survey-use-cases.service";

@Injectable()
export class SurveyUseCases1Implementation
  extends SurveyUseCasesImplementation
  implements ISurveyUseCases
{
  /*El resto de la implementación es la misma, pero el metodo create cambia */
  create(createSurveyDto: CreateSurveyDto): any {
    return 'This action adds a new survey';
  }
}
