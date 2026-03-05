import { toast } from "react-toastify";
function InProgressTicket({
  progressTicket,
  setCompletedTickets,
  completedTickets,
  removeTickets,
}) {
  const { title } = progressTicket;
  //   console.log(removeTickets);
  const handleCompleteTicket = (ticket) => {
    toast("The task is completed!");
    setCompletedTickets([ticket, ...completedTickets]);
    removeTickets(ticket);
  };
  return (
    <>
      <div className="bg-white ticket-card px-3 py-4 mb-5">
        <h3 className="text font-semibold text-gray-700 mb-4">{title}</h3>
        <button
          onClick={() => {
            handleCompleteTicket(progressTicket);
          }}
          className="btn btn-block bg-[#02A53B] text-white"
        >
          Complete
        </button>
      </div>
    </>
  );
}

export default InProgressTicket;
