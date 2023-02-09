import { useState, useEffect } from "react";
import axios from "axios";
import type {HoroscopeDataValues, GetFormDataParams} from "../interfaces/interface"



export default function useFetchHoroscope() {
  const [horoscopeData, setHoroscopeData] = useState(
    JSON.parse(localStorage.getItem("apiData")!) || <HoroscopeDataValues>{}
  );
  const [formData, setFormData] = useState(
    JSON.parse(localStorage.getItem("formData")!) || {}
  );
  const [loading, setLoading] = useState(false);
  const [isFalls, setIsFalls] = useState(false);

  function getFormData(data: GetFormDataParams) {
    setFormData(data);
  }
  function fetchData() {
    const API_Key = import.meta.env.VITE_API_KEY;
    setLoading(true);
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

    axios
      .request(options)
      .then(function (response) {
        localStorage.setItem("apiData", JSON.stringify(response.data));
        setHoroscopeData(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        alert("There is an issue with the server - " + error.message);
      });
  }

  useEffect(() => {
    formData.sign && fetchData();
  }, [formData.sign]);

  return { loading, horoscopeData, getFormData, formData, isFalls, setIsFalls };
}
