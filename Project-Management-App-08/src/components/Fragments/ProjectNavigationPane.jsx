import { useRef } from "react";
import classes from "../../assets/projectnavigation.module.css";

export default function ProjectNavigationPane({
  listofProjects,
  selectedProjectRef,
  setActivity,
  ...props
}) {
  if (!listofProjects) {
    return null;
  }

  function handleSelectProject(e) {
    setActivity(`viewproject:${e.target.id}`);
    selectedProjectRef.current = e.target;
  }

  return (
    <ul className={`py-8 overflow-x-hidden max-h-[500px] ${classes.navpane}`}>
      {listofProjects.map((entry, index) => (
        <li
          onClick={handleSelectProject}
          key={`list:${index}`}
          id={index}
          className="text-white list-none cursor-pointer text-nowrap py-2 hover:bg-gray-800 rounded-md px-2"
        >
          {entry.projectName}
        </li>
      ))}
    </ul>
  );
}
