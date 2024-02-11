import React, { useState } from "react";

function ShadowDropdown({ onSelect }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm bg-transparent px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >
          {selectedOption || "Select Option"}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {selectedOption && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <button
              className="block px-4 py-2 text-sm text-white hover:bg-gray-700 w-full text-left"
              onClick={() => handleOptionSelect("Free")}
              role="menuitem"
            >
              Free
            </button>
            <button
              className="block px-4 py-2 text-sm text-white hover:bg-gray-700 w-full text-left"
              onClick={() => handleOptionSelect("Paid")}
              role="menuitem"
            >
              Paid
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShadowDropdown;
