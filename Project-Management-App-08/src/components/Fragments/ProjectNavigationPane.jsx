import classes from "../../assets/projectnavigation.module.css";

export default function ProjectNavigationPane({ listofProjects, ...props }) {
  if (!listofProjects) {
    return null;
  }
  return (
    <nav className={`py-8 overflow-x-hidden max-h-[500px] ${classes.navpane}`}>
      {listofProjects.map((entry, index) => (
        <li className="text-white list-none cursor-pointer text-nowrap py-2">
          {entry.projectName}
        </li>
      ))}
    </nav>
  );
}
