export default function SelectDay() {
    const dates =["Yesterday","Today","Tomorrow"]
  return (
    <select
    className="block text-gray-600 border-b-2 px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border-1 focus:outline-none focus:ring-0 border-indigo-400  focus:border-indigo-700 peer"
    required
  >
    <option value="">Select Date 🗓️</option>
    {dates.map((date) => (
      <option value={date} key={crypto.randomUUID()}>
        {date}
      </option>
    ))}
  </select>
  )
}