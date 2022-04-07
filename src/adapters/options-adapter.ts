import { Continent } from "../models/Continent.models";

export const mutationToOptionSelect = (options: Continent[] | undefined) => {
  console.log("options : ", options)
  if (options) {
    return options?.map((option) => {
      return {
        value: option?.code,
        text: option?.name,
      };
    });
  }else{
    return []
  }
};
