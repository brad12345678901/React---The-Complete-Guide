import NoProject from "../../assets/no-projects.png";
import Button from "../Button";

export default function Home({setActivity, ...props}) {
  return (
    <div className="flex flex-col justify-center gap-3">
      <img src={NoProject} className="w-40 place-self-center" />
      <h1 className="text-2xl font-semibold text-center">No Projects Selected</h1>
      <p className="text-center">Try to select a Project or get started with a new one</p>
      <Button onClick={() => {setActivity("addproject")}}>Create new Project</Button>
    </div>
  );
}
