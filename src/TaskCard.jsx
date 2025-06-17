import React from 'react';

function TaskCard({ title, dueDate, completedAtDate, assigneeName, status }) {
  return (
    <div className="bg-white shadow-md rounded p-4 mb-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {status === 'Pending' && (
        <>
          <p className="text-sm text-gray-600">Due Date: {dueDate}</p>
          <p className="text-sm text-gray-600">Assignee: {assigneeName}</p>
        </>
      )}
      {status === 'Done' && (
        <>
          <p className="text-sm text-gray-600">Completed On: {completedAtDate}</p>
          <p className="text-sm text-gray-600">Assignee: {assigneeName}</p>
        </>
      )}
    </div>
  );
}

export default TaskCard;
