function ResolvedTask({ completedTickets }) {
  console.log(completedTickets);
  return (
    <>
      <div className="mb-5">
        <h3 className="text-2xl font-bold text-gray-700  mb-2">
          Resolved Task
        </h3>

        <p className="text-gray-500 text-sm">No resolved tasks yet.</p>
        {completedTickets.map((solvedIssue) => (
          <div className="bg-green-100 shadow px-3 py-4 mb-4">
            <h3 className="text font-semibold text-gray-700">
              {solvedIssue.title}
            </h3>
          </div>
        ))}
      </div>
    </>
  );
}

export default ResolvedTask;
