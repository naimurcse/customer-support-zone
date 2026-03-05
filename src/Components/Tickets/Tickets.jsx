import { use, useState } from "react";
import TicketCard from "../TicketCard/TicketCard";

function Tickets({
  ticketsPromise,
  setInProgressTickets,
  inProgressTickets,
  completedTickets,
}) {
  const tickets = use(ticketsPromise);
  // console.log(setInProgressTickets);
  const [allTickets, setAllTickets] = useState(tickets);
  const removeFromCustomerTicketList = (issue) => {
    const remainingCustomerTickets = allTickets.filter(
      (ticket) => ticket.id != issue.id,
    );
    setAllTickets([...remainingCustomerTickets]);
  };

  return (
    <>
      <h3 className="text-2xl font-bold text-gray-700 mb-2">
        Customer Tickets
      </h3>

      {/* Ticket Cards in two columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Ticket Cards */}
        {allTickets.map((ticket) => (
          <TicketCard
            key={ticket.id}
            ticket={ticket}
            setInProgressTickets={setInProgressTickets}
            inProgressTickets={inProgressTickets}
            completedTickets={completedTickets}
            removeFromCustomerTicketList={removeFromCustomerTicketList}
          ></TicketCard>
        ))}
      </div>
    </>
  );
}

export default Tickets;
