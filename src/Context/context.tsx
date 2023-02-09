import { createContext, useContext } from "react";
import useFetchHoroscope from "../hooks/useFetchHoroscope";
import { ReactNode } from "react";

export interface HoroscopeDataValues {
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
  getFormData: (formData: FormDataValues) => void;
  isFalls: boolean;
  setIsFalls?: (isFalls: boolean) => void;
}

const HoroscopeContext = createContext<HoroscopeContextValue | undefined>(
  undefined
);

interface Props {
  children?: ReactNode;
}

export const HoroscopeDataProvider = ({ children }: Props) => {
  const { loading, horoscopeData, getFormData, formData, isFalls, setIsFalls } =
    useFetchHoroscope();

  return (
    <HoroscopeContext.Provider
      value={{
        loading,
        horoscopeData,
        getFormData,
        formData,
        isFalls,
        setIsFalls,
      }}
    >
      {children}
    </HoroscopeContext.Provider>
  );
};

export default function useGlobalContext() {
  return useContext(HoroscopeContext);
}
