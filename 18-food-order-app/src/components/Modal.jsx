import { use, useContext, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { StoreContext } from "../store/storeContext";
import Button from "./Button";

export default function Modal({ progress, resetAction, children, ref }) {
  const { dispatch } = useContext(StoreContext);
  const controller = useRef(null);

  if (progress === 1) {
    controller.current = new AbortController();
  }

  function closeHandler() {
    if (progress) {
      if (controller.current != null) controller.current.abort();
      resetAction();
    }
  }

  useEffect(() => {
    if (progress) ref.current.showModal();
  }, [ref]);

  return createPortal(
    <dialog ref={ref} className="modal" onClose={closeHandler}>
      {children(controller)}
    </dialog>,
    document.getElementById("modal"),
  );
}
