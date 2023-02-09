import { useState, useEffect } from "react";
import axios from "axios";
import { HoroscopeDataValues } from "../Context/context";

interface GetFormDataParams {
  name: string;
  sign: string;
  email: string;
  date: string;
}

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
    const options = {
      method: "POST",
      url: "https://sameer-kumar-aztro-v1.p.rapidapi.com/",
      params: {
        sign: formData?.sign.split(" ")[0],
        day: formData.date,
      },
      headers: {
        "X-RapidAPI-Key": "47250aff6amshb141229d7d02716p1bd1acjsn9ffc0033ce19",
        "X-RapidAPI-Host": "sameer-kumar-aztro-v1.p.rapidapi.com",
      },
    };
    setLoading(true);
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
