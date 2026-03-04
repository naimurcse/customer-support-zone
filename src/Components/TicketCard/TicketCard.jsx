import dateIcon from "../../assets/dateIcon.png";
function TicketCard({ ticket }) {
  console.log(ticket);
  const { title, description, customer, priority, status, createdAt } = ticket;
  return (
    <>
      <div className="px-4 py-6 bg-white shadow">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold text-gray-800">{title}</h3>
          <button>{status}</button>
        </div>
        <p className="text-sm text-gray-600 mb-5">{description}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-sm">
            <p className="text-gray-600">#1001</p>
            <p className="uppercase text-red-500 font-semibold">
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
