"use client";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

const SearchableSelectMultiple = ({
  options = [],
  value = [],
  onChange,
  title,
}) => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const filteredOptions =
    options?.filter(
      (option) =>
        typeof option?.label === "string" &&
        option.label.toLowerCase().includes(search.toLowerCase())
    ) || [];

  const handleOptionClick = (option) => {
    if (value.some((selectedOption) => selectedOption.value === option.value)) {
      onChange(
        value.filter((selectedOption) => selectedOption.value !== option.value)
      );
    } else {
      onChange([...value, option]);
    }
    setSearch("");
  };

  const handleDeleteClick = (option) => {
    onChange(
      value.filter((selectedOption) => selectedOption.value !== option.value)
    );
  };

  return (
    <div className="flex-1 ">
      <label className="block text-sm font-medium text-gray-700">{title}</label>
      <div className="flex flex-row flex-wrap justify-start items-center">
        {value.map((option, index) => (
          <div
            key={index}
            className="flex items-center m-1 border p-1 rounded bg-zinc-400 text-white"
          >
            <span className="ml-2">{option.label}</span>
            <AiOutlineDelete
              style={{ width: "20px", height: "20px" }}
              className="ml-2 cursor-pointer"
              onClick={() => handleDeleteClick(option)}
            />
          </div>
        ))}
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onClick={() => setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
          className="my-2 flex-1 bg-white border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-zinc-500 focus:border-zinc-500 block p-2.5"
          placeholder="Search..."
        />
      </div>
      {isOpen && (
        <div
          style={{
            maxHeight: "200px",
            overflowY: "scroll",
          }}
          py={1}
        >
          {filteredOptions.map((option, index) => (
            <div
              key={index}
              className="m-2 p-2 border rounded-lg hover:bg-zinc-200 cursor-pointer flex flex-row flex-wrap gap-2 w-full"
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

export default SearchableSelectMultiple;
