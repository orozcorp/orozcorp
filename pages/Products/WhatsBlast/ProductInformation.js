export default function ProductInformation({ head, description }) {
  return (
    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 my-4">
        {head}
      </h2>
      <p className="font-normal text-gray-700 text-justify my-4">
        {description}
      </p>
    </div>
  );
}
