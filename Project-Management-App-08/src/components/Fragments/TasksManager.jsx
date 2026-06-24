import Button from "../Button";
import Input from "../forms/Input";

export default function TasksManager({
  projectIndex,
  tasks,
  setListOfProject,
  ...props
}) {
    
  function handleAddTask(e) {
    e.preventDefault();
  }

  function handleClear(e) {
    const filteredTask = tasks.filter((_, index) => index != e.target.id);
    setListOfProject((prevList) =>
      prevList.map((project, index) => {
        if (index == e.target.id) {
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
        <Input type="text" className="my-2 w-2/6" />
        <Button type="submit" plain className="hover:text-slate-500">
          Add Task
        </Button>
      </form>
      <ul className="flex flex-col gap-2 bg-gray-200 list-none py-6 px-2 rounded-md">
        {Array.isArray(tasks) ? (
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
          <p className="place-self-center">No Tasks Available</p>
        )}
      </ul>
    </div>
  );
}
