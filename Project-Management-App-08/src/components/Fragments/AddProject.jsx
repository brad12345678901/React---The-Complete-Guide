import Button from "../Button";
import Input from "../forms/Input";

export default function AddProject({ onSubmit, ...props }) {
  return (
    <div className="w-full grid gap-2">
      <span className="flex gap-5 justify-end">
        <Button plain className="hover:text-slate-500">
          Cancel
        </Button>
        <Button>Save</Button>
      </span>
      <Input type="text" placeholder="Enter Project Name" />
      <Input type="textarea" placeholder="Enter Project Description" />
      <Input type="date" />
    </div>
  );
}
