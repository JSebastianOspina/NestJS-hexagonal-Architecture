import { Injectable } from "@nestjs/common";
import { CreateSurveyDto } from "../infraestructure/dto/create-survey.dto";
import { UpdateSurveyDto } from "../infraestructure/dto/update-survey.dto";

@Injectable()
export class SurveyUseCasesImplementation implements ISurveyUseCases {
  create(createSurveyDto: any): Promise<any> {
    return Promise.resolve(undefined);
  }

  findAll(): Promise<any> {
    return Promise.resolve(undefined);
  }

  findOne(id: string): Promise<any> {
    return Promise.resolve(undefined);
  }

  remove(id: string): Promise<any> {
    return Promise.resolve(undefined);
  }

  update(id: string, updateSurveyDto: any): Promise<any> {
    return Promise.resolve(undefined);
  }

}
