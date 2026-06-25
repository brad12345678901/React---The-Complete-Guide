import { dateformat } from "../../utils/formatter";
import Button from "../Button";
import TasksManager from "./TasksManager";

export default function ViewProject({
  index,
  selectedProject,
  setListOfProject,
  deleteProject,
  errorModal
}) {
  return (
    <span className="flex flex-col grow">
      <header className="p-3">
        <span className="flex flex-row justify-between">
          <h1 className="text-2xl font-semibold">
            {selectedProject.projectName}
          </h1>{" "}
          <Button id={index} onClick={deleteProject} plain className="text-slate-500">Delete</Button>
        </span>

        <p className="text-sm text-slate-500">
          {dateformat.format(
            new Date(
              selectedProject.projectDate
                ? selectedProject.projectDate
                : "1999-01-01",
            ),
          )}
        </p>
        {selectedProject.projectDescription.split("\n").map((line, index) => (
          <span key={`line:${index}`}>
            <p>{line}</p>
          </span>
        ))}
      </header>
      <hr />
      <div className="p-3">
        <TasksManager
          projectIndex={index}
          tasks={selectedProject.tasks}
          setListOfProject={setListOfProject}
          errorModal={errorModal}
        />
      </div>
    </span>
  );
}
