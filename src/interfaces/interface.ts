import { ReactNode } from "react";

interface HoroscopeDataValues {
    description: string;
    color: string;
    compatability: string;
    lucky_number: string;
    lucky_time: string;
    mood: string;
    current_date: string;
    date_range: string;
  }

  interface FormDataValues {
    name: string;
    sign: string;
  }

  interface HoroscopeContextValue {
    loading: boolean;
    horoscopeData: HoroscopeDataValues;
    formData: FormDataValues;
    getFormData: (data: FormDataValues) => void;
    isFalls: boolean;
    setIsFalls?: (isFalls: boolean) => void;
  }


  interface Props {
    children?: ReactNode;
  }

  export type {
    HoroscopeDataValues,
    Props,
    HoroscopeContextValue,
    FormDataValues,
  }