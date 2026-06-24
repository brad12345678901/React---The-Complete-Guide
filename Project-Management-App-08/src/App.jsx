import { useEffect, useState, useRef } from "react";
import Button from "./components/Button";
import Sidebar from "./components/Sidebar";
import Home from "./components/Fragments/Home";
import AddProject from "./components/Fragments/AddProject";
import { dateformat } from "./utils/formatter";
import ViewProject from "./components/Fragments/ViewProject";

function App() {
  const [activeActivity, setActiveActivity] = useState("home");
  const [listOfProjects, setListOfProject] = useState([
    {
      projectName: "Test Project",
      projectDescription:
        "Let's start with the basics of the javascript\n\n TEST",
      projectDate: "2026-03-25",
      tasks: ["Do Something", "Do Nothing"],
    },
    {
      projectName: "Test Project 2",
      projectDescription: "Let's start with the basics of the C#\n\n TEST",
      projectDate: "2026-03-24",
      tasks: ["Do Something", "Do Nothing"],
    },
  ]);
  const selectedRef = useRef();
  let selectedId = 0;

  if (selectedRef.current) {
    selectedId = selectedRef.current.id;
  }

  function handleDeleteProject(e) {
    setActiveActivity("home");
    setListOfProject((list) =>
      list.filter((project, index) => index != e.target.id),
    );
  }

  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold">
        Project Management Application
      </h1>
      <div className="flex min-h-[50vh]">
        <Sidebar
          setActivity={setActiveActivity}
          projectList={listOfProjects}
          selectedProjectRef={selectedRef}
        ></Sidebar>
        <div className="flex flex-row grow p-5 justify-center">
          {activeActivity == "home" && <Home setActivity={setActiveActivity} />}
          {activeActivity.includes("viewproject") && (
            <ViewProject
              index={selectedId}
              selectedProject={listOfProjects[selectedId]}
              setListOfProject={setListOfProject}
              deleteProject={handleDeleteProject}
            />
          )}
          {activeActivity == "addproject" && (
            <AddProject
              setActivity={setActiveActivity}
              setListofProject={setListOfProject}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
