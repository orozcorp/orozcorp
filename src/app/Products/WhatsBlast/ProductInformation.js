export default function ProductInformation({ head, description }) {
  return (
    <div className="block max-w-sm p-6 bg-zinc-800 border border-zinc-800 rounded-lg shadow  ">
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-white my-4">
        {head}
      </h2>
      <p className="font-normal text-white text-justify my-4">{description}</p>
    </div>
  );
}
