import React from "react";
import ReactDOM from "react-dom";
import "./modal.css";
export default function ModalContainer({ isOpen, modalContent }) {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <aside
      tag="aside"
      role="dialog"
      tabIndex="-1"
      aria-modal="true"
      className="modal-portal-cover"
      style={{ border: "solid 2px " + modalContent.status }}
    >
      <div className="modal-portal-area">{modalContent.content}</div>
    </aside>,
    document.querySelector("#root")
  );
}
