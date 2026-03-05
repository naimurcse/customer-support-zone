import { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import LoadingSpinner from "./Components/LoadingSpinner/LoaderSpining";
import Navber from "./Components/Navber/Navber";
import ResolvedTasks from "./Components/ResolvedTasks/ResolvedTasks";
import TaskStatus from "./Components/TaskStatus/TaskStatus";
import Tickets from "./Components/Tickets/Tickets";

const ticketsPromise = fetch("/ticketsInJSON.json").then((res) => res.json());

function App() {
  const [inProgressTickets, setInProgressTickets] = useState([]);
  const [completedTickets, setCompletedTickets] = useState([]);
  const removeTickets = (gotTicket) => {
    const stillUnsolved = inProgressTickets.filter(
      (ticket) => ticket.id != gotTicket.id,
    );
    setInProgressTickets(stillUnsolved);
  };

  const inProgressNumber = inProgressTickets.length;
  const resolvedNumber = completedTickets.length;
  return (
    <>
      {/* Navber Section */}
      <Navber></Navber>

      {/* Banner Section */}
      <Banner
        inProgressNumber={inProgressNumber}
        resolvedNumber={resolvedNumber}
      ></Banner>

      {/* Main Section */}
      <div className="max-w-10/12 mx-auto">
        <div className="grid grid-cols-12 gap-5">
          {/* Customer Tickets */}
          <div className=" col-span-12 xl:col-span-9 order-2 xl:order-1">
            {/* Tickets are loaded here*/}
            <Suspense fallback={<LoadingSpinner></LoadingSpinner>}>
              <Tickets
                ticketsPromise={ticketsPromise}
                setInProgressTickets={setInProgressTickets}
                inProgressTickets={inProgressTickets}
                completedTickets={completedTickets}
              ></Tickets>
            </Suspense>
          </div>

          {/* Task Status and Resolved Task */}
          <div className="col-span-12 xl:col-span-3 order-1 xl:order-2">
            {/* Task Status */}
            <TaskStatus
              inProgressTickets={inProgressTickets}
              setCompletedTickets={setCompletedTickets}
              completedTickets={completedTickets}
              removeTickets={removeTickets}
            ></TaskStatus>

            {/* Resolved Task */}
            <ResolvedTasks completedTickets={completedTickets}></ResolvedTasks>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
