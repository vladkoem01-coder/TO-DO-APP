import NewTaskForm from './NewTaskForm';
import TaskList from './TaskList';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
  {
    id: 1,
    description: 'Completed task',
    created: '17 seconds ago',
    completed:true,
  },
  {
    id: 2,
    description: 'Editing task',
    created: '5 minutes ago',
    completed:false,
  },
  {
    id: 3,
    description: 'Active task',
    created: '5 minutes ago',
    completed:false,
  },
]);

const deleteTask = (id: number) => {
  setTasks((tasks) =>
  tasks.filter((tasks) => tasks.id !== id)
)}

  return (

    <section className="todoapp">
      <NewTaskForm />
      <section className="main">
        <TaskList 
        tasks={tasks}
        onDelete={deleteTask}
        />
        <Footer />
      </section>
    </section>
    
  );
}

export default App;

