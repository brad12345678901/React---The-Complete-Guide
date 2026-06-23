export default function Input({ type, ...props }) {
  if (type === "textarea") {
    return <textarea 
    {...props}
    className = "bg-zinc-200 p-2 outline-none focus:border-b-2 focus:border-b-slate-400 rounded-md"
    ></textarea>;
  }

  return <input type={type} {...props}
  className = "bg-zinc-200 p-2 outline-none focus:border-b-2 focus:border-b-slate-400 rounded-md"></input>;
}
