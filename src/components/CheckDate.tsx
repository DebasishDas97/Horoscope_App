import { useState, useEffect } from "react";
import useGlobalContext from "../Context/context";

export default function CheckDate() {
  const { horoscopeData, setIsFalls } = useGlobalContext();
  const [date, setDate] = useState(new Date(horoscopeData.current_date));
  const dateRange = horoscopeData.date_range;
  const [startStr, endStr] = dateRange.split(" - ");
  const startMonth = new Date(startStr).getMonth();
  const endMonth = new Date(endStr).getMonth();
  const startDate = new Date(startStr).getDate();
  const endDate = new Date(endStr).getDate();

  const currentMonth = date.getMonth();
  const currentDate = date.getDate();

  const isWithinRange =
    (currentMonth > startMonth ||
      (currentMonth === startMonth && currentDate >= startDate)) &&
    (currentMonth < endMonth ||
      (currentMonth === endMonth && currentDate <= endDate));

  useEffect(() => {
    if (isWithinRange) {
      setIsFalls(true);
    } else {
      setIsFalls(false);
    }
  }, [isWithinRange]);

  return (
    <>
      <p className="font-semibold font-serif text-center mt-3 -mb-1">
        Date within range:{" "}
        <span className="text-indigo-600 capitalize">{`${isWithinRange}`}</span>
      </p>
    </>
  );
}
