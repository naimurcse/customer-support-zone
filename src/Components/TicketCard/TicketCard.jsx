import dateIcon from "../../assets/dateIcon.png";
function TicketCard({ ticket }) {
  console.log(ticket);
  const { title, description, customer, priority, status, createdAt, id } =
    ticket;
  return (
    <>
      <div className="px-4 py-6 bg-white shadow flex flex-col justify-between">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold text-gray-800">{title}</h3>
          <button>{status}</button>
        </div>
        <p className="text-sm text-gray-600 mb-5">{description}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-sm">
            <p className="text-gray-600">#{id}</p>
            <p
              className="uppercase font-semibold"
              className={
                priority.toLowerCase() === "high"
                  ? "text-red-500"
                  : priority.toLowerCase() === "medium"
                    ? "text-orange-500"
                    : "text-green-500"
              }
            >
              {priority} Priority
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <p className="text-gray-600">{customer}</p>
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
