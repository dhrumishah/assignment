import Search from "./Search";
import Copy from "./assets/copy.svg";
import Link from "./assets/link.svg";
import Tick from "./assets/tick.svg";
import Cross from "./assets/cross.svg";
import Dash from "./assets/dash.svg";

const Table = () => {
  return (
    <div className="ml-72 p-8 mt-12">
      <Search />
      <div className="relative overflow-x-auto items-start">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-900 uppercase">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Details
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Amount requested
              </th>
              <th scope="col" className="px-6 py-3">
                Proposal status
              </th>
              <th scope="col" className="px-6 py-3">
                Funding Status
              </th>
              <th scope="col" className="px-6 py-3">
                Tally
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-x-2 border-t-2 border-gray-300 align-top">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-black whitespace-nowrap"
              >
                721
              </th>
              <td className="px-6 py-4 text-black flex-col">
                QSTN: NFT Launch in partnership with Paras
                <div className="grid grid-cols-3 gap-2">
                  <div className="px-1.5 py-1 w-fit text-center flex gap-2 border border-gray-300 items-center align-center rounded-md mt-2">
                    <p className="text-black">qstn.near</p>
                    <img src={Copy} width={15} />
                  </div>
                  <div className="px-1.5 py-1 w-fit text-center flex gap-2 border border-gray-300 items-center align-center  rounded-md mt-2">
                    <p className="text-black">Forum</p>
                    <img src={Link} />
                  </div>
                  <div className="px-1.5 py-1 w-fit text-center flex gap-2 border border-gray-300 items-center align-center  rounded-md mt-2">
                    <p className="text-black">AstroDAO</p>
                    <img src={Link} />
                  </div>
                  <div className="px-1.5 py-1 w-fit text-center flex gap-2 border border-gray-300 items-center align-center  rounded-md mt-2">
                    <p className="text-black">Report</p>
                    <img src={Link} />
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="bg-gradient-to-r from-green-800 to-green-500 text-white rounded-lg px-2 py-[4px] font-bold">
                  dApps
                </div>
              </td>
              <td className="px-6 py-4 text-black">$6000</td>
              <td className="px-6 py-4">
                <div className="bg-gradient-to-r from-green-800 to-green-500 flex-col text-white rounded-lg px-2 py-[4px] font-bold">
                  Pending (2/5)
                </div>
                <div className="p-[2px] text-center flex gap-2 border border-gray-300 rounded-lg mt-2">
                  <img src={Tick} />
                  <p className="text-black">Whendacha</p>
                </div>
                <div className="p-[2px] text-center flex gap-2 border border-gray-300 rounded-lg mt-2">
                  <img src={Cross} />
                  <p className="text-black">Cryptocredit</p>
                </div>
                <div className="p-[2px] text-center flex gap-2 border border-gray-300 rounded-lg mt-2">
                  <img src={Dash} />
                  <p className="text-black">Alejandro</p>
                </div>
                <div className="p-[2px] text-center flex gap-2 border border-gray-300 rounded-lg mt-2">
                  <img src={Dash} />
                  <p className="text-black">Klint</p>
                </div>
                <div className="p-[2px] text-center flex gap-2 border border-gray-300 rounded-lg mt-2">
                  <img src={Dash} />
                  <p className="text-black">so608</p>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="bg-gradient-to-r from-green-800 to-green-500 flex-col text-white rounded-lg px-2 py-[4px] font-bold">
                  Pending (0/5)
                </div>

                <div className="p-[2px] text-center flex gap-2 border border-gray-300 rounded-lg mt-2">
                  <img src={Tick} />
                  <p className="text-black">Whendacha</p>
                </div>
                <div className="p-[2px] text-center flex gap-2 border border-gray-300 rounded-lg mt-2">
                  <img src={Cross} />
                  <p className="text-black">Cryptocredit</p>
                </div>
                <div className="p-[2px] text-center flex gap-2 border border-gray-300 rounded-lg mt-2">
                  <img src={Dash} />
                  <p className="text-black">Alejandro</p>
                </div>
                <div className="p-[2px] text-center flex gap-2 border border-gray-300 rounded-lg mt-2">
                  <img src={Dash} />
                  <p className="text-black">Klint</p>
                </div>
                <div className="p-[2px] text-center flex gap-2 border border-gray-300 rounded-lg mt-2">
                  <img src={Dash} />
                  <p className="text-black">so608</p>
                </div>
              </td>
              <td className="px-6 py-4 text-black">No</td>
            </tr>
          </tbody>
        </table>
        <div className="flex flex-row items-center border-x-2 border-gray-300">
          <div className="border border-gray-300 ml-12 px-8">
            <span>Note</span>
          </div>
          <div className="border-t border-gray-300 w-full mr-12"></div>
        </div>
        <div className="font-semibold text-gray-900 border-x-2 border-b-2 border-gray-300 justify-start">
          <div className="flex flex-col">
            <span
              scope="row"
              className="px-6 mt-4 font-normal text-black whitespace-nowrap"
            >
              alejandro : Call Scheduled 05/04/2023
            </span>
            <span
              scope="row"
              className="px-6 font-normal text-black whitespace-nowrap"
            >
              alejandro : AVB, but scam
            </span>
            <span
              scope="row"
              className="px-6 mb-4 font-normal text-black whitespace-nowrap"
            >
              alejandro : Um, wut? Wait for applicant
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
