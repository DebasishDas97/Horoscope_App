import { useNavigate } from "react-router-dom";
import SignsOptions from "./SignsOptions";
import useGlobalContext from "../Context/context";
import SelectDay from "./SelectDay";

export default function Form() {
  const navigate = useNavigate();
  const { getFormData } = useGlobalContext()!;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const formData = {
      name: (e.currentTarget[0] as HTMLInputElement).value,
      sign: (e.currentTarget[1] as HTMLInputElement).value,
    };
    e.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formData));
    getFormData(formData);
    navigate("/details");
  }

  return (
    <div className="w-full shadow-md rounded max-w-xs relative">
      <img
        className="absolute ring-2 ring-indigo-500 -top-8 left-[135px] w-12 h-12 rounded-full"
        src="https://www.animatedimages.org/data/media/438/animated-cartoon-avatar-image-0016.gif"
        alt="Rounded-Avatar"
      />

      <form onSubmit={handleSubmit} className="px-8 pt-6 pb-6 text-center">
        <span className="font-serif font-semibold text-lg text-indigo-500">
          See what the future holds for you 🔮
        </span>
        <div className="mb-4 relative">
          <input
            type="text"
            required
            id="userName"
            autoComplete="true"
            className="border-indigo-400 border-b-2 px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border-1 focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="userName"
            className="absolute text-sm text-gray-600 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Your Name 🪪
          </label>
        </div>
        <div className="mb-4 relative">
          <SignsOptions />
        </div>
        <div className="mb-4 relative">
          <input
            type="email"
            required
            id="userEmail"
            autoComplete="true"
            className="border-indigo-400 border-b-2 px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border-1 focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="userEmail"
            className="absolute text-sm text-gray-600 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Your Email 📫
          </label>
        </div>
        <div className="mb-6 relative">
          <SelectDay />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            See Details
          </button>
          <span className="text-indigo-400">
            Made with <span className="animate-pulse">♥︎</span>
          </span>
        </div>
      </form>
    </div>
  );
}
