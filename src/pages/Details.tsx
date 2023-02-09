import useGlobalContext from "../Context/context";
import DisplayData from "../components/DisplayData";
import GoToHomeBtn from "../components/GoToHomeBtn";
import CheckDate from "../components/CheckDate";

export default function () {
  const { formData, loading } = useGlobalContext();
  return (
    <>
      <div className="text-center w-full mt-5 -mb-2">
        <h1 className="text-3xl font-semibold font-serif">
          Hi<span className="text-3xl"> 👋</span>,{" "}
          <span className="text-indigo-700 capitalize">{formData.name}</span>
        </h1>
        <p className="text-xl font-semibold font-serif mt-1">
          Your Sign : <span className="text-indigo-600">{formData.sign}</span>
        </p>
      </div>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <>
          <CheckDate />
          <section className="flex justify-center px-3 py-10 2xl:px-20 w-full">
            <DisplayData />
          </section>
          <GoToHomeBtn />
        </>
      )}
    </>
  );
}
