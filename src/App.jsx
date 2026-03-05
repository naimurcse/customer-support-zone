import { Suspense } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import LoadingSpinner from "./Components/LoadingSpinner/LoaderSpining";
import Navber from "./Components/Navber/Navber";
import ResolvedTask from "./Components/ResolvedTask/ResolvedTask";
import TaskStatus from "./Components/TaskStatus/TaskStatus";
import Tickets from "./Components/Tickets/Tickets";

const ticketsPromise = fetch("/ticketsInJSON.json").then((res) => res.json());

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
            <TaskStatus></TaskStatus>

            {/* Resolved Task */}
            <ResolvedTask></ResolvedTask>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer></Footer>
    </>
  );
}

export default App;
