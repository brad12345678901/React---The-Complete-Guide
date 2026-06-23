import Button from "./Button";

export default function Sidebar({className, setActivity, ...props}) {
    return <div className = "p-6 bg-black w-1/3 rounded-r-lg">
        <h1 className = "text-white my-8 font-semibold text-2xl">Your Projects</h1>
        <Button>+ Add Project</Button>
    </div>
}