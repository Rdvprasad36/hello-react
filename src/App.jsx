import TaskCard from './TaskCard'
import './index.css'

function App() {
  const tasks = [
    {
      id: 1,
      title: 'Task 1',
      dueDate: '2024-07-01',
      completedAtDate: '',
      assigneeName: 'Alice',
      status: 'Pending',
    },
    {
      id: 2,
      title: 'Task 2',
      dueDate: '',
      completedAtDate: '2024-06-20',
      assigneeName: 'Bob',
      status: 'Done',
    },
    {
      id: 3,
      title: 'Task 3',
      dueDate: '2024-07-05',
      completedAtDate: '',
      assigneeName: 'Charlie',
      status: 'Pending',
    },
  ]

  const pendingTasks = tasks.filter((task) => task.status === 'Pending')
  const doneTasks = tasks.filter((task) => task.status === 'Done')

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Pending Tasks</h1>
      <div>
        {pendingTasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            dueDate={task.dueDate}
            assigneeName={task.assigneeName}
            status={task.status}
          />
        ))}
      </div>

      <h1 className="text-2xl font-bold mt-8 mb-4">Done Tasks</h1>
      <div>
        {doneTasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            completedAtDate={task.completedAtDate}
            assigneeName={task.assigneeName}
            status={task.status}
          />
        ))}
      </div>
    </div>
  )
}

export default App
