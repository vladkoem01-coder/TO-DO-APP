import Task from './Task';

function TaskList() {
  return (
    <ul className="todo-list">
      <Task />
      <Task />
      <Task />
    </ul>
  );
}

export default TaskList;