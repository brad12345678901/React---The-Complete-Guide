import Button from "./Button";
import ProjectNavigationPane from "./Fragments/ProjectNavigationPane";

export default function Sidebar({className, setActivity, projectList, selectedProjectRef, ...props}) {
    return <div className = "p-6 bg-black w-1/3 rounded-r-lg">
        <h1 className = "text-white my-8 font-semibold text-2xl">Your Projects</h1>
        <Button onClick={() => {setActivity("addproject")}}>+ Add Project</Button>
        <ProjectNavigationPane listofProjects={projectList} selectedProjectRef={selectedProjectRef} setActivity={setActivity}/>
    </div>
}