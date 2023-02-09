import useGlobalContext from "../Context/context";

export default function DisplayData() {
  const { horoscopeData, isFalls } = useGlobalContext()!;


  return (
      <div className="bg-gray-800 p-4 rounded md:w-[600px] w-full">
        <h2 className="font-semibold text-center text-green-400 text-2xl md:text-3xl mb-4">
          {horoscopeData.current_date}
        </h2>
        <ul className="md:text-xl text-[1.1rem] font-semibold tracking-wide">
          <li className="flex justify-between my-2 text-red-300">
            <span>
              Horoscope :{" "}
              <span className={`text-white font-light ${isFalls ? "bg-white text-black" : "bg-none"}`}>
                {horoscopeData.description}
              </span>
            </span>
          </li>
          <li className="flex justify-between my-2 text-blue-300">
            <span>
              Lucky Color :{" "}
              <span className="text-white font-light">
                {horoscopeData.color}
              </span>
            </span>
          </li>
          <li className="flex justify-between my-2 text-indigo-300">
            <span>
              Date_Range :{" "}
              <span className="text-white font-light">
                {horoscopeData.date_range}
              </span>
            </span>
          </li>
          <li className="flex justify-between my-2 text-yellow-300">
            <span>
              Lucky Number :{" "}
              <span className="text-white font-light">
                {horoscopeData.lucky_number}
              </span>
            </span>
            {}
          </li>
          <li className="flex justify-between my-2 text-purple-300">
            <span>
              Lucky Time :{" "}
              <span className="text-white font-light">
                {horoscopeData.lucky_time.split(".").join(" ")}
              </span>
            </span>
          </li>
          <li className="text-green-100 flex justify-between my-2">
            <span>
              Mood:{" "}
              <span className="text-white font-light">
                {horoscopeData.mood}
              </span>
            </span>
          </li>
        </ul>
      </div>
  );
}
