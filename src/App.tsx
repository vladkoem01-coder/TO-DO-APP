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
  },
  {
    id: 2,
    description: 'Editing task',
    created: '5 minutes ago',
  },
  {
    id: 3,
    description: 'Active task',
    created: '5 minutes ago',
  },
]);
  return (

    <section className="todoapp">
      <NewTaskForm />
      <section className="main">
        <TaskList tasks={tasks}/>
        <Footer />
      </section>
    </section>
    
  );
}

export default App;

