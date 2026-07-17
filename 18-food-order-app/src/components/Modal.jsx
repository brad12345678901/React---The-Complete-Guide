import { use } from "react";
import { StoreContext } from "../store/storeContext";
import Button from "./Button";

export default function Modal({ children, ref }) {
  return (
    <dialog ref={ref} className="modal">
      {children}
    </dialog>
  );
}
