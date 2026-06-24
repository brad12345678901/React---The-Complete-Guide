export default function Input({ type, className, errors, ...props }) {
  if (type === "textarea") {
    return (
      <div>
        <textarea
          {...props}
          className={`w-full bg-zinc-200 p-2 outline-none ${errors ? "border border-red-500 focus:border-red-600" : "focus:border-b-2 focus:border-b-slate-400"} rounded-md min-h-28  ${className}`}
        />
        {errors && <span className="block text-xs text-red-500">{errors}</span>}
      </div>
    );
  }

  return (
    <div>
      <input
        type={type}
        {...props}
        className={`w-full bg-zinc-200 p-2 outline-none ${errors ? "border border-red-500 focus:border-red-600" : "focus:border-b-2 focus:border-b-slate-400"} rounded-md max-h-10 ${className}`}
      />
      {errors && <span className="block text-xs text-red-500">{errors}</span>}
    </div>
  );
}
