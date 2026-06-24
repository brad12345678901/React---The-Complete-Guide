import { useEffect, useState } from "react";
import Button from "../Button";
import Input from "../forms/Input";

export default function TasksManager({
  projectIndex,
  tasks,
  setListOfProject,
  ...props
}) {
  const [error, setError] = useState(undefined);
  useEffect(() => {
    setError(undefined);
  }, [projectIndex]);
  function handleAddTask(e) {
    e.preventDefault();
    let error = false;
    const formData = new FormData(e.target);
    const tempTasks = [...tasks];

    for (const i of formData.values()) {
      if (!i) {
        error = true;
        setError("Task cannot be empty");
      } else tempTasks.push(i);
    }
    if (error)
      setListOfProject((prevList) =>
        prevList.map((project, index) => {
          if (index == projectIndex) {
            return {
              ...project,
              tasks: tempTasks,
            };
          }
          return project;
        }),
      );
  }

  function handleClear(e) {
    const filteredTask = tasks.filter((_, index) => index != e.target.id);
    setListOfProject((prevList) =>
      prevList.map((project, index) => {
        if (index == projectIndex) {
          return {
            ...project,
            tasks: filteredTask,
          };
        }
        return project;
      }),
    );
  }

  return (
    <div>
      <h1 className="py-5 text-3xl font-semibold">Tasks</h1>
      <form className="flex items-center gap-2 pb-6" onSubmit={handleAddTask}>
        <Input type="text" name="tasks" className="my-2 w-2/6" errors={error} />
        <Button type="submit" plain className="hover:text-slate-500">
          Add Task
        </Button>
      </form>
      <ul className="flex flex-col gap-2 bg-gray-200 list-none py-6 px-2 rounded-md">
        {Array.isArray(tasks) && tasks.length ? (
          tasks.map((task, index) => (
            <li
              key={`tasks:${index}`}
              className="flex items-center justify-between"
            >
              <span>{task}</span>
              <Button
                onClick={handleClear}
                id={index}
                plain
                className="hover:text-red-600"
              >
                Clear
              </Button>
            </li>
          ))
        ) : (
          <p className="place-self-center text-gray-500 font-semibold">
            This project doesn't have any tasks
          </p>
        )}
      </ul>
    </div>
  );
}
