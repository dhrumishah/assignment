import React from "react";
import Filter from "./assets/filter.svg";
import Circle from "./assets/circle.svg";
import Copy from "./assets/copy.svg";
import Link from "./assets/link.svg";
import Tick from "./assets/tick.svg";
import Cross from "./assets/cross.svg";
import Dash from "./assets/dash.svg";

const Table = () => {
  return (
    <div className="ml-72 p-8 mt-12">
      <div className="grid grid-cols-8 gap-2 mb-4">
        <form className="col-span-6">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg"
              placeholder="Search"
              required
            />
          </div>
        </form>
        <div class="flex gap-2 p-2 border border-gray-300 rounded-lg col-span-1">
          <img src={Filter} />
          <p class="text-black">Filter</p>
        </div>
        <div class="flex gap-2 p-2 border border-gray-300 rounded-lg col-span-1">
          <p class="text-black">March</p>
          <img src={Circle} />
        </div>
      </div>

      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500">
          <thead class="text-xs text-gray-900 uppercase">
            <tr>
              <th scope="col" class="px-6 py-3">
                ID
              </th>
              <th scope="col" class="px-6 py-3">
                Details
              </th>
              <th scope="col" class="px-6 py-3">
                Category
              </th>
              <th scope="col" class="px-6 py-3">
                Amount requested
              </th>
              <th scope="col" class="px-6 py-3">
                Proposal status
              </th>
              <th scope="col" class="px-6 py-3">
                Funding Status
              </th>
              <th scope="col" class="px-6 py-3">
                Tally
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border border-gray-300 ">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-black whitespace-nowrap"
              >
                721
              </th>
              <td class="px-6 py-4 text-black flex-col">
                QSTN: NFT Launch in partnership with Paras
                <div class="grid grid-cols-3 gap-2">
                  {" "}
                  <div class="p-[2px] text-center flex gap-2 border border-gray-300 rounded-lg mt-2">
                    <p class="text-black">qstn.near</p>
                    <img src={Copy} />
                  </div>
                  <div class="p-[2px] text-center flex gap-2 border border-gray-300 rounded-lg mt-2">
                    <p class="text-black">Forum</p>
                    <img src={Link} />
                  </div>
                  <div class="p-[2px] text-center flex gap-2 border border-gray-300 rounded-lg mt-2">
                    <p class="text-black">AstroDAO</p>
                    <img src={Link} />
                  </div>
                  <div class="p-[2px] text-center flex gap-2 border border-gray-300 rounded-lg mt-2">
                    <p class="text-black">Report</p>
                    <img src={Link} />
                  </div>
                </div>
              </td>
              <td class="px-6 py-4">
                <div class="bg-gradient-to-r from-green-800 to-green-500 text-white rounded-lg px-2 py-[4px] font-bold">
                  dApps
                </div>
              </td>
              <td class="px-6 py-4 text-black">$6000</td>
              <td class="px-6 py-4">
                <div class="bg-gradient-to-r from-green-800 to-green-500 flex-col text-white rounded-lg px-2 py-[4px] font-bold">
                  Pending (2/5)
                </div>
                <div class="p-[2px] text-center flex gap-2 border border-gray-300 rounded-lg mt-2">
                  <img src={Tick} />
                  <p class="text-black">Whendacha</p>
                </div>
                <div class="p-[2px] text-center flex gap-2 border border-gray-300 rounded-lg mt-2">
                  <img src={Cross} />
                  <p class="text-black">Cryptocredit</p>
                </div>
                <div class="p-[2px] text-center flex gap-2 border border-gray-300 rounded-lg mt-2">
                  <img src={Dash} />
                  <p class="text-black">Alejandro</p>
                </div>
                <div class="p-[2px] text-center flex gap-2 border border-gray-300 rounded-lg mt-2">
                  <img src={Dash} />
                  <p class="text-black">Klint</p>
                </div>
                <div class="p-[2px] text-center flex gap-2 border border-gray-300 rounded-lg mt-2">
                  <img src={Dash} />
                  <p class="text-black">so608</p>
                </div>
              </td>
              <td class="px-6 py-4">
                <div class="bg-gradient-to-r from-green-800 to-green-500 flex-col text-white rounded-lg px-2 py-[4px] font-bold">
                  Pending (0/5)
                </div>

                <div class="p-[2px] text-center flex gap-2 border border-gray-300 rounded-lg mt-2">
                  <img src={Tick} />
                  <p class="text-black">Whendacha</p>
                </div>
                <div class="p-[2px] text-center flex gap-2 border border-gray-300 rounded-lg mt-2">
                  <img src={Cross} />
                  <p class="text-black">Cryptocredit</p>
                </div>
                <div class="p-[2px] text-center flex gap-2 border border-gray-300 rounded-lg mt-2">
                  <img src={Dash} />
                  <p class="text-black">Alejandro</p>
                </div>
                <div class="p-[2px] text-center flex gap-2 border border-gray-300 rounded-lg mt-2">
                  <img src={Dash} />
                  <p class="text-black">Klint</p>
                </div>
                <div class="p-[2px] text-center flex gap-2 border border-gray-300 rounded-lg mt-2">
                  <img src={Dash} />
                  <p class="text-black">so608</p>
                </div>
              </td>
              <td class="px-6 py-4 text-black">No</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
