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
   onEdit: (id: number, newDescription: string) => void;
};

function TaskList({ tasks, onDelete, onEdit }: TaskListProps) {
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
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}

export default TaskList;
