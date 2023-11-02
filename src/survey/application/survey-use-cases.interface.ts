interface ISurveyUseCases {
  findAll(): Promise<any>;
  findOne(id: string): Promise<any>;
  create(createSurveyDto: any): Promise<any>;
  update(id: string, updateSurveyDto: any): Promise<any>;
  remove(id: string): Promise<any>;
  
}