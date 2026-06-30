import {useState} from 'react';
type TaskProps = {
  id: number;
  description: string;
  created: string;
  completed: boolean;
  onDelete: (id: number) => void;
  onEdit: (id: number, newDescription: string) => void;
};

function Task(
  {id, description, created, completed, onDelete, onEdit}:
  TaskProps) {

    const [editing, setEditing] = useState(false);

  return (
    <li className={
      editing
      ? 'editing'
      : completed
      ? 'completed'
      : ''
    }>
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

        <button 
        className="icon icon-edit" 
        onClick={() => setEditing(true)}
        />
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