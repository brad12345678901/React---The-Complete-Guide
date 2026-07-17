import { use, useContext, useEffect } from "react";
import { createPortal } from "react-dom";
import { StoreContext } from "../store/storeContext";
import Button from "./Button";

export default function Modal({ progress, resetAction, children, ref }) {
  const { dispatch } = useContext(StoreContext);

  function closeHandler() {
    if (progress) {
      resetAction();
    }
  }

  useEffect(() => {
    if (progress) ref.current.showModal();
  }, [ref]);

  return createPortal(
    <dialog ref={ref} className="modal" onClose={closeHandler}>
      {children}
    </dialog>,
    document.getElementById("modal"),
  );
}
