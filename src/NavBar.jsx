import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav class="bg-white text-gray-400 text-[18px]">
        <div class="flex justify-evenly items-center mx-auto ml-72 p-4">
          <button className="rounded-md px-4 py-2 hover:border-b-4 border-green-700">
            Overview
          </button>
          <button className="rounded-md px-4 py-2 hover:border-b-4 border-green-700">
            Proposal Database
          </button>
          <button className="rounded-md px-4 py-2 hover:border-b-4 border-green-700">
            Add Proposal
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
