import dateIcon from "../src/assets/dateIcon.png";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Navber from "./Components/Navber/Navber";

function App() {
  return (
    <>
      {/* Navber Section */}
      <Navber></Navber>

      {/* Banner Section */}
      <Banner></Banner>

      {/* Main Section */}

      <div className="max-w-10/12 mx-auto">
        <div className="grid grid-cols-12 gap-5">
          <div className=" col-span-9 ">
            <h3 className="text-xl font-bold text-gray-800 mb-1">
              Customer Tickets
            </h3>
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
          </div>
          <div className="col-span-3">
            {/* Task Status */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                Task Status
              </h3>
              <p className="text-gray-500 text-sm">
                Select a ticket to add to Task Status
              </p>
            </div>

            {/* Resolved Task */}
            <div className="mb-5">
              <h3 className="text-xl font-bold text-gray-800  mb-1">
                Resolved Task
              </h3>
              <p className="text-gray-500 text-sm">No resolved tasks yet.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer></Footer>
    </>
  );
}

export default App;
