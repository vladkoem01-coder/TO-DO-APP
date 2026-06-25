type TaskProps = {
  id: number;
  description: string;
  created: string;
  completed: boolean;
  onDelete: (id: number) => void;
};

function Task({ id, description, created, completed, onDelete}: TaskProps) {
  return (
    <li className={completed ? 'completed' : ''}>
      <div className="view">
        <input className="toggle" type="checkbox" />

        <label>
          <span className="description">
            {description}
          </span>

          <span className="created">
            created {created}
          </span>
        </label>

        <button className="icon icon-edit" />
        <button 
        className="icon icon-destroy" 
        onClick={() => onDelete(id)}
        />
      </div>

      <input
        type="text"
        className="edit"
        defaultValue="Editing task"
      />
    </li>
  );
}

export default Task;