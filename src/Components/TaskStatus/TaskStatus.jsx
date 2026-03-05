import InProgressTicket from "../InProgressTicket/InProgressTicket";
import "./TaskStatus.css";
function TaskStatus({ inProgressTickets }) {
  return (
    <>
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-700 mb-2">
          Task Status ({inProgressTickets.length})
        </h3>
        {inProgressTickets.length === 0 ? (
          <p className="text-gray-500 text-sm">
            Select a ticket to add to Task Status
          </p>
        ) : (
          <div>
            {/* Ticket Component */}
            {inProgressTickets.map((progressTicket) => (
              <InProgressTicket
                progressTicket={progressTicket}
              ></InProgressTicket>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default TaskStatus;
