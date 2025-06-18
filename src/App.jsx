import TaskCard from './TaskCard'
import './index.css'

function App() {
  const tasks = [
    {
      id: 1,
      title: 'Build the website with static content',
      dueDate: '2024-04-10',
      completedAtDate: '',
      assigneeName: 'Rohit S',
      status: 'Pending',
      project: 'Graduation Final Year Project (Revamp College Website)',
    },
    {
      id: 2,
      title: 'Add a blog',
      dueDate: '2024-03-22',
      completedAtDate: '',
      assigneeName: 'Rohit M',
      status: 'Pending',
      project: 'Graduation Final Year Project (Revamp College Website)',
    },
    {
      id: 3,
      title: 'Design the mockup',
      dueDate: '',
      completedAtDate: '2024-04-10',
      assigneeName: 'Rohit M',
      status: 'Done',
      project: 'Graduation Final Year Project (Revamp College Website)',
    },
    {
      id: 4,
      title: 'Get the approval from principal',
      dueDate: '',
      completedAtDate: '2024-04-20',
      assigneeName: 'Ajay S',
      status: 'Done',
      project: 'Graduation Final Year Project (Revamp College Website)',
    },
  ]

  const pendingTasks = tasks.filter((task) => task.status === 'Pending')
  const doneTasks = tasks.filter((task) => task.status === 'Done')

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Smarter Tasks</h1>
      <h2 className="text-xl mb-6">
        Project: Graduation Final Year Project (Revamp College Website)
      </h2>
      <div className="flex gap-8">
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-4">Pending</h3>
          <div>
            {pendingTasks.map((task) => (
              <TaskCard
                key={task.id}
                title={task.title}
                dueDate={task.dueDate}
                assigneeName={task.assigneeName}
                status={task.status}
                project={task.project}
              />
            ))}
            <button className="mt-4 w-full text-left text-gray-500 hover:text-gray-700">
              + New task
            </button>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-4">Done</h3>
          <div>
            {doneTasks.map((task) => (
              <TaskCard
                key={task.id}
                title={task.title}
                completedAtDate={task.completedAtDate}
                assigneeName={task.assigneeName}
                status={task.status}
                project={task.project}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
