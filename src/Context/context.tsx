import { createContext, useContext } from "react";
import useFetchHoroscope from "../hooks/useFetchHoroscope";
import type {HoroscopeContextValue, Props} from "../interfaces/interface"

const HoroscopeContext = createContext<HoroscopeContextValue | undefined>(
  undefined
);

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
