import { useImperativeHandle, useRef, forwardRef } from "react";
import Button from "../Button";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children, ...props }, ref) {
  const modalRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        modalRef.current.showModal();
      },
    };
  });

  function handleClose() {
    modalRef.current.close();
  }

  return createPortal(
    <dialog
      ref={modalRef}
      className="rounded-md p-6 space-y-2 bg-none open:backdrop:bg-stone-900/80"
    >
      {children}
      <div className="text-right">
        <Button onClick={handleClose} className="justify-self-end">
          Close
        </Button>
      </div>
    </dialog>,
    document.getElementById("modal-root"),
  );
});

export default Modal;
