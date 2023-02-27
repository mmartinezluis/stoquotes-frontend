import React from "react";
import ReactDOM from "react-dom";
import "./modal.css";
export default function ModalContainer() {
  return ReactDOM.createPortal(
    <aside
      tag="aside"
      role="dialog"
      tabIndex="-1"
      aria-modal="true"
      className="modal-portal-cover"
    >
      <div className="modal-portal-area">"content"</div>
    </aside>,
    document.querySelector("#root")
  );
}
