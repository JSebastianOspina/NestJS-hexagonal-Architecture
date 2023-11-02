import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from "@nestjs/common";
import { CreateSurveyDto } from "./dto/create-survey.dto";
import { UpdateSurveyDto } from "./dto/update-survey.dto";
import { SurveyProvider } from "../application/survey.provider";

@Controller("survey")
export class SurveyController {
  constructor(
    @Inject(SurveyProvider) private readonly surveyUseCase: ISurveyUseCases
  ) {
  }

  @Post()
  create(@Body() createSurveyDto: CreateSurveyDto) {
    return this.surveyUseCase.create(createSurveyDto);
  }

  @Get()
  findAll() {
    return this.surveyUseCase.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.surveyUseCase.findOne(id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateSurveyDto: UpdateSurveyDto) {
    return this.surveyUseCase.update(id, updateSurveyDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.surveyUseCase.remove(id);
  }
}
