import { use } from "react";
import dateIcon from "../../assets/dateIcon.png";

function Tickets({ ticketsPromise }) {
  const tickets = use(ticketsPromise);
  console.log(tickets);
  return (
    <>
      <h3 className="text-xl font-bold text-gray-800 mb-2">Customer Tickets</h3>
      <div className="grid grid-cols-2 gap-3">
        <div className="px-4 py-6 bg-white shadow">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-gray-800">
              Login Issues - Can't Access Account
            </h3>
            <button>Open</button>
          </div>
          <p className="text-sm text-gray-600 mb-5">
            Customer is unable to log in to their account. They've tried
            resetting their password multiple times but still...
          </p>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-sm">
              <p className="text-gray-600">#1001</p>
              <p className="uppercase text-red-500 font-semibold">
                High Priority
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <p className="text-gray-600">Jhon Smith</p>
              <div className="flex items-center gap-1">
                <img className="w-4" src={dateIcon} alt="" />
                <p>1/16/2024</p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Tickets;
