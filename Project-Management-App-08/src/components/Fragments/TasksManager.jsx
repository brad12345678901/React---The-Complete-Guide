import Button from "../Button";
import Input from "../forms/Input";

export default function TasksManager({
  projectIndex,
  tasks,
  setListOfProject,
  ...props
}) {
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
      <span className="flex items-center gap-2 pb-6">
        <Input type="text" className="my-2 w-2/6" />
        <Button plain className="hover:text-slate-500">
          Add Task
        </Button>
      </span>
      <ul className="flex flex-col gap-2 bg-gray-200 list-none py-6 px-2 rounded-md">
        <li className="flex items-center justify-between">
          <span>TEST LIST</span>
          <Button plain className="hover:text-red-600">
            Clear
          </Button>
        </li>
        {tasks.map((task, index) => (
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
        ))}
      </ul>
    </div>
  );
}
