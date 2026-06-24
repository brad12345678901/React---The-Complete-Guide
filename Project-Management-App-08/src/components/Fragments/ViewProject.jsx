import { dateformat } from "../../utils/formatter";
import TasksManager from "./TasksManager";

export default function ViewProject({ index, selectedProject, setListOfProject }) {
  return (
    <span className="flex flex-col grow">
      <header className="p-3">
        <h1 className="text-2xl font-semibold">{selectedProject.projectName}</h1>
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
        <TasksManager projectIndex={index} tasks={selectedProject.tasks} setListOfProject={setListOfProject}/>
      </div>
    </span>
  );
}
