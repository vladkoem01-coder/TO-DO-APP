import Task from './Task';

type TaskType = {
  id: number;
  description: string;
  created: string;
};

type TaskListProps = {
  tasks: TaskType[];
};

function TaskList({ tasks }: TaskListProps) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          description={task.description}
          created={task.created}
        />
      ))}
    </ul>
  );
}

export default TaskList;

