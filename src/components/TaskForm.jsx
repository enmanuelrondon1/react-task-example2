import { useState, useContext } from "react";
import { TaskContex } from "../contex/TaskContex";

function TaskForm() {
  const [title, setTtitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContex);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTtitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          placeholder="Escibe tu tarea"
          onChange={(e) => setTtitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        />
        <textarea
          placeholder="escribe la descropcion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          className="bg-slate-300 p-3 w-full mb-2"
          value={description}
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
