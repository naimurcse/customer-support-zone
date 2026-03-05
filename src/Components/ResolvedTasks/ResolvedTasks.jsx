import ResolvedTask from "../ResolvedTask/ResolvedTask";

function ResolvedTasks({ completedTickets }) {
  // console.log(completedTickets);
  return (
    <>
      <div className="mb-5">
        <h3 className="text-2xl font-bold text-gray-700  mb-2">
          Resolved Task
        </h3>
        {completedTickets.length === 0 ? (
          <p className="text-gray-500 text-sm">No resolved tasks yet.</p>
        ) : (
          completedTickets.map((solvedIssue) => (
            <ResolvedTask
              key={solvedIssue.id}
              solvedIssue={solvedIssue}
            ></ResolvedTask>
          ))
        )}
      </div>
    </>
  );
}

export default ResolvedTasks;
