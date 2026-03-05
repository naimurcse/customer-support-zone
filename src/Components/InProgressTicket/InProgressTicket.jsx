import { toast } from "react-toastify";
function InProgressTicket({
  progressTicket,
  setCompletedTickets,
  completedTickets,
}) {
  const { title } = progressTicket;
  //   console.log(setCompletedTickets);
  const handleCompleteTicket = (ticket) => {
    setCompletedTickets([ticket, ...completedTickets]);
  };
  return (
    <>
      <div className="bg-white ticket-card px-3 py-4 mb-5">
        <h3 className="text font-semibold text-gray-700 mb-4">{title}</h3>
        <button
          onClick={() => {
            toast("The task is Completed!");
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
