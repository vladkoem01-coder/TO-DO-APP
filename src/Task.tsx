type TaskProps = {
  id: number;
  description: string;
  created: string;
};

function Task({ id, description, created }: TaskProps) {
  return (
    <li>
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
        <button className="icon icon-destroy" />
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