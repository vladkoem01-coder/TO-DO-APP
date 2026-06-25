import Task from "./Task";

type TaskType = {
  id: number;
  description: string;
  created: string;
  completed: boolean;
 
};

type TaskListProps = {
  tasks: TaskType[];
   onDelete: (id: number) => void;
};

function TaskList({ tasks, onDelete }: TaskListProps) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          description={task.description}
          created={task.created}
          completed={task.completed}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TaskList;
