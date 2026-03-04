import dateIcon from "../../assets/dateIcon.png";
import "./TicketCard.css";
function TicketCard({ ticket }) {
  console.log(ticket);
  const { title, description, customer, priority, status, createdAt, id } =
    ticket;
  return (
    <>
      <div className="px-4 py-6 bg-white shadow flex flex-col justify-between">
        <div className="md:flex md:justify-between md:items-center mb-2 ">
          <button className="ml-0 order-1 md:order-2 mb-4 md:mb-0 status-btn">
            <span
              className={
                status.toLowerCase() === "in-progress"
                  ? "text-yellow-600 bg-yellow-100"
                  : status.toLowerCase() === "open"
                    ? "text-green-700 bg-green-100"
                    : "text-gray-500 bg-gray-100"
              }
            >
              {status}
            </span>
          </button>
          <h3 className="text-xl font-semibold text-gray-800 order-2 md:order-1">
            {title}
          </h3>
        </div>
        <p className="lg:text-sm xl:text-base text-gray-500 mb-5">
          {description}
        </p>
        <div className="flex flex-col items-start md:flex-row justify-between md:items-center">
          {/* Ticket ID and  Priority*/}
          <div className="flex items-center gap-2 lg:text-sm justify-between w-full md:w-auto mb-2 md:mb-0">
            <p className="text-gray-500">#{id}</p>
            <p
              className={
                priority.toLowerCase() === "high"
                  ? "text-red-500"
                  : priority.toLowerCase() === "medium"
                    ? "text-orange-500"
                    : "text-green-500"
              }
            >
              <span className="uppercase font-semibold">
                {priority} Priority
              </span>
            </p>
          </div>

          {/* Customer and date */}
          <div className="flex items-center gap-2 lg:text-sm justify-between w-full md:w-auto text-gray-500">
            <p className="">{customer}</p>
            <div className="flex items-center gap-1">
              <img className="w-4" src={dateIcon} alt="" />
              <p>{createdAt}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TicketCard;
