import { useState } from "react";
type NewTaskFormProps = {
  addTask: (description: string) => void
}


function NewTaskForm({ addTask }: NewTaskFormProps) {

const [text, setText] = useState(``)

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter"){
            addTask(text);
            setText("")
          }
        }}
      />
    </header>
  );
}

export default NewTaskForm;
