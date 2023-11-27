"use client";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
const SearchableSelect = ({ options = [], value, onChange, label }) => {
  const [search, setSearch] = useState(value?.label || "");
  const [isOpen, setIsOpen] = useState(false);
  const filteredOptions =
    options?.filter(
      (option) =>
        typeof option?.label === "string" &&
        option.label.toLowerCase().includes(search.toLowerCase())
    ) || [];

  const handleOptionClick = (option) => {
    onChange(option);
    setSearch(option.label);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {label && (
        <label
          htmlFor={label}
          className="block text-xs font-medium text-zinc-400"
        >
          {label}
        </label>
      )}
      <div className="flex flex-row flex-wrap justify-start items-center mt-1">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onClick={() => {
            setIsOpen(true);
            setSearch("");
          }}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
          className="flex-1 bg-white border-b border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-zinc-500 focus:border-zinc-500 block p-2.5"
        />
        <span onClick={() => setSearch("")}>
          <AiOutlineDelete
            className="ml-2 text-zinc-400 hover:text-zinc-500"
            style={{ width: "24px", height: "24px" }}
          />
        </span>
      </div>
      {isOpen && (
        <div
          className="absolute z-10 bg-white shadow-lg max-h-60 w-full overflow-auto"
          style={{ top: "100%", left: 0 }}
        >
          {filteredOptions.map((option, index) => (
            <div
              key={index}
              className="p-2.5 border-b border-zinc-100 hover:bg-zinc-200 cursor-pointer"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default SearchableSelect;
