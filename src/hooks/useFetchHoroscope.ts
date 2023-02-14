import { useState, useEffect } from "react";
import axios from "axios";
import AxiosOptions from "../constants/axiosOptions";
import type {
  HoroscopeDataValues,
  FormDataValues,
} from "../interfaces/interface";

export default function useFetchHoroscope() {
  const [horoscopeData, setHoroscopeData] = useState<HoroscopeDataValues>(
    JSON.parse(localStorage.getItem("apiData")!) || {});
  const [formData, setFormData] = useState<FormDataValues>(
    JSON.parse(localStorage.getItem("formData")!) || {}
  );
  const [loading, setLoading] = useState(false);
  const [isFalls, setIsFalls] = useState(false);

  function getFormData(data: FormDataValues) {
    setFormData(data);
  }

  function fetchData() {
    setLoading(true);
    axios
      .request(AxiosOptions(formData))
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
