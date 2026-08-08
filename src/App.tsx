import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";
import { useState } from "react";


function App() {
  const [filter, setFilter] = useState<'all'| 'active' | 'completed'>('all')
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: "Completed task",
      created: "17 seconds ago",
      completed: true,
    },
    {
      id: 2,
      description: "Editing task",
      created: "5 minutes ago",
      completed: false,
    },
    {
      id: 3,
      description: "Active task",
      created: "5 minutes ago",
      completed: false,
    },
  ]);

  const deleteTask = (id: number) => {
    setTasks((tasks) => tasks.filter((tasks) => tasks.id !== id));
  };

  const editTask = (id: number, newDescription: string) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, description: newDescription } : task,
      ),
    );
  };

  const toggleTask = (id: number) => {
  setTasks((tasks) =>
    tasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task,
    ),
  );
};

const addTask = (description: string) => {
  const newTask = {
    id: Date.now(),
    description,
    created: "Now",
    completed: false
  }

  setTasks((tasks) => [...tasks, newTask])
}

const filteredTasks = tasks.filter((task) => {
  if (filter === 'active') 
    return !task.completed;
  if (filter === 'completed')
    return task.completed;
  return true
})

const activeTasksCount = tasks.filter((task) => !task.completed).length;
 
const clearCompleted = () => {
setTasks((prevTasks) => prevTasks.filter((task) => !task.completed))
}

return (
    <section className="todoapp">
      <NewTaskForm addTask={addTask}/>
      <section className="main">
        <TaskList
        tasks={filteredTasks}
        onDelete={deleteTask}
        onEdit={editTask} 
        toggleTask={toggleTask}
        
        />
        <Footer
        activeCount={activeTasksCount}
        currentFilter={filter}
        onFilterChange={setFilter}
        onClearCompleted={clearCompleted}
        />
      </section>
    </section>
  );
}

export default App;
