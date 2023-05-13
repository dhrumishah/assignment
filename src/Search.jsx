import React from "react";
import Filter from "./assets/filter.svg";
import Circle from "./assets/circle.svg";

const Search = () => {
  return (
    <div>
      <div className="grid grid-cols-8 gap-2 mb-4">
        <form className="col-span-6">
          <label
            form="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg"
              placeholder="Search"
              required
            />
          </div>
        </form>
        <div className="flex gap-2 p-2 border border-gray-300 rounded-lg col-span-1">
          <img src={Filter} />
          <p className="text-black">Filter</p>
        </div>
        <div className="flex gap-2 p-2 border border-gray-300 rounded-lg col-span-1">
          <p className="text-black">March</p>
          <img src={Circle} />
        </div>
      </div>
    </div>
  );
};

export default Search;
