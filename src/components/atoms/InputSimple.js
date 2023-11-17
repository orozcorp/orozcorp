export default function InputSimple({
  type,
  id,
  label,
  required,
  value,
  onChange,
}) {
  return (
    <div className="flex-1 ">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        step="0.01"
        className="bg-white border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-zinc-500 focus:border-zinc-500 block w-full p-2.5 "
        required={required}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
