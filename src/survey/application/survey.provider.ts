/* El provider decide  cual es el use case que se debe ejecutar */
import { SurveyUseCases1Implementation } from "./survey-use-cases1.service";
import { SurveyUseCasesImplementation } from "./survey-use-cases.service";

export const SurveyProvider = function(): ISurveyUseCases {
  //Logica para la eleccion del use case
  if (1 === 1) {
    return new SurveyUseCases1Implementation();
  } else {
    return new SurveyUseCasesImplementation();
  }
};
