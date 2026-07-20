import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";
import { useState } from "react";


function App() {
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
  return (
    <section className="todoapp">
      <NewTaskForm addTask={addTask}/>
      <section className="main">
        <TaskList tasks={tasks}
        onDelete={deleteTask}
        onEdit={editTask} 
        toggleTask={toggleTask}
        />
        <Footer />
      </section>
    </section>
  );
}

export default App;
