import Button from "../Button";
import Input from "../forms/Input";

export default function AddProject({ onSubmit, setActivity, ...props }) {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    setActivity("home");
  }

  return (
    <form className="w-full grid gap-2" onSubmit={handleSubmit}>
      <span className="flex gap-5 justify-end">
        <Button
          type="button"
          plain
          onClick={() => setActivity("home")}
          className="hover:text-slate-500"
        >
          Cancel
        </Button>
        <Button type="submit">Save</Button>
      </span>
      <Input type="text" name="projectName" placeholder="Enter Project Name" />
      <Input
        type="textarea"
        name="projectDescription"
        placeholder="Enter Project Description"
      />
      <Input type="date" name="projectDate" />
    </form>
  );
}
