import { FormDataValues } from "../interfaces/interface";
export default function AxiosOptions(formData: FormDataValues) {
    const API_Key = import.meta.env.VITE_API_KEY;
    const options = {
        method: "POST",
        url: "https://sameer-kumar-aztro-v1.p.rapidapi.com/",
        params: {
          sign: formData?.sign.split(" ")[0],
          day: formData.date,
        },
        headers: {
          "X-RapidAPI-Key": API_Key,
          "X-RapidAPI-Host": "sameer-kumar-aztro-v1.p.rapidapi.com",
        },
      };
      return options;
}