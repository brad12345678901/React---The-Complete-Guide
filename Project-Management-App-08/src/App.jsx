import { useState } from "react";
import Button from "./components/Button";
import Sidebar from "./components/Sidebar";
import Home from "./components/Fragments/Home";
import AddProject from "./components/Fragments/AddProject";

function App() {
  const [activeActivity, setActiveActivity] = useState("home");
  const [listOfProjects, setListOfProject] = useState([
    {
      projectName: "TEST",
      projectDescription: "TEST DESCRIPTION",
      projectDate: Date(),
      tasks: ["Do Shit", "Do Nothing"],
    },
  ]);

  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold">
        Project Management Application
      </h1>
      <div className="flex min-h-[50vh]">
        <Sidebar setActivity={setActiveActivity}></Sidebar>
        <div className="flex flex-row flex-1 p-5 justify-center">
          {activeActivity == "home" && <Home setActivity={setActiveActivity}/>}
          {activeActivity == "addproject" && <AddProject/>}
        </div>
      </div>
    </>
  );
}

export default App;
