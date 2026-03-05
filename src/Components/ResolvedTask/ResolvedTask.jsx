function ResolvedTask({ solvedIssue }) {
  //   console.assert(solvedIssue);
  return (
    <div className="bg-green-100 shadow px-3 py-4 mb-4">
      <h3 className="text font-semibold text-gray-700">{solvedIssue.title}</h3>
    </div>
  );
}

export default ResolvedTask;
