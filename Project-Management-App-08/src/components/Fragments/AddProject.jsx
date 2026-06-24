import { useState } from "react";
import Button from "../Button";
import Input from "../forms/Input";

export default function AddProject({
  onSubmit,
  setActivity,
  setListofProject,
  ...props
}) {
  const [errors, setErrors] = useState({
    projectName: undefined,
    projectDescription: undefined,
    projectDate: undefined,
  });

  function handleSubmit(e) {
    let error = false;
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("tasks", "");
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    for (const [key, value] of Object.entries(data)) {
      if (key != "tasks") {
        if (!value) {
          error = true;
          setErrors((prev) => {
            return {
              ...prev,
              [key]: `Should not be empty`,
            };
          });
        }
      }
    }

    if (!error) {
      setListofProject((prev) => [...prev, data]);
      setActivity("home");
    }
  }

  return (
    <form className="w-full space-y-6" onSubmit={handleSubmit}>
      <div className="block space-x-4 text-right">
        <Button
          type="button"
          plain
          onClick={() => setActivity("home")}
          className="hover:text-slate-500"
        >
          Cancel
        </Button>
        <Button type="submit">Save</Button>
      </div>
      <Input
        type="text"
        name="projectName"
        placeholder="Enter Project Name"
        errors={errors.projectName}
      />
      <Input
        type="textarea"
        name="projectDescription"
        placeholder="Enter Project Description"
        errors={errors.projectDescription}
      />
      <Input type="date" name="projectDate" errors={errors.projectDate} />
    </form>
  );
}
