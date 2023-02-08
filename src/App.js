import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

export default function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      "id": 1,
      "text": "Doctors Appointment",
      "date": "Feb 5th at 2:30pm",
      "reminder": false
    },
    {
      "id": 3,
      "text": "Grocery Shopping",
      "date": "Feb 5th at 2:30pm",
      "reminder": false
    },
    {
      "id": 6,
      "text": "Test Shipping",
      "date": "Feb 5th at 2:30pm",
      "reminder": true
    },
    {
      "id": 4,
      "text": "Move to Mandeville",
      "date": "Feb 27 at 5:00PM",
      "reminder": true
    },
    {
      "text": "Leave NK",
      "date": "Friday coming",
      "reminder": true,
      "id": 5
    }
  ])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete tasks
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder2
  const toggleReminder = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header title='Task Tracker' onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask} /> : 'No tasks to show'}
    </div>
  );
}
