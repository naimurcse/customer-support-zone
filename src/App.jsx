import { Suspense } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import LoadingSpinner from "./Components/LoadingSpinner/LoaderSpining";
import Navber from "./Components/Navber/Navber";
import Tickets from "./Components/Tickets/Tickets";

const ticketsPromise = fetch("/ticketsInJSON.json").then((res) => res.json());

function App() {
  console.log(ticketsPromise);
  return (
    <>
      {/* Navber Section */}
      <Navber></Navber>

      {/* Banner Section */}
      <Banner></Banner>

      {/* Main Section */}
      <div className="max-w-10/12 mx-auto">
        <div className="grid grid-cols-12 gap-5">
          {/* Customer Tickets */}
          <div className=" col-span-12 xl:col-span-9 order-2 xl:order-1">
            {/* Tickets are loaded here*/}
            <Suspense fallback={<LoadingSpinner></LoadingSpinner>}>
              <Tickets ticketsPromise={ticketsPromise}></Tickets>
            </Suspense>
          </div>

          {/* Task Status and Resolved Task */}
          <div className="col-span-12 xl:col-span-3 order-1 xl:order-2">
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
