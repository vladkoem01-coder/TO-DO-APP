import NewTaskForm from './NewTaskForm';
import TaskList from './TaskList';
import Footer from './Footer';

function App() {
  return (
    <section className="todoapp">
      <NewTaskForm />
      <section className="main">
        <TaskList />
        <Footer />
      </section>
    </section>
  );
}

export default App;