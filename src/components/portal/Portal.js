import React from "react";
import ReactDOM from "react-dom";
export default function Portal({ isOpen, children }) {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <aside
      tag="aside"
      role="dialog"
      tabIndex="-1"
      aria-modal="true"
      className="portal-cover"
    >
      <div className="portal-area">{children}</div>
    </aside>,
    document.querySelector("#root")
  );
}
