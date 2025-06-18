import React from 'react';
import './TaskCard.css';

function TaskCard({ title, dueDate, completedAtDate, assigneeName, status }) {
  return (
    <div className="task-card">
      <h3 className="task-title">{title}</h3>
      {status === 'Pending' && (
        <>
          <p className="task-info">Due on: {dueDate}</p>
          <p className="task-info">Assignee: {assigneeName}</p>
        </>
      )}
      {status === 'Done' && (
        <>
          <p className="task-info">Completed on: {completedAtDate}</p>
          <p className="task-info">Assignee: {assigneeName}</p>
        </>
      )}
    </div>
  );
}

export default TaskCard;
